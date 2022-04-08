import React, {useCallback, useEffect, useState} from 'react'
import {connect} from "../../redux/blockchain/blockchainActions"
import {useDispatch, useSelector} from "react-redux"
import {fetchData} from "../../redux/data/dataActions"
import {isAndroid, isIOS} from "react-device-detect"
import s from './ConnectAndMint.module.scss'
import {normalizeRange} from "../../utils/math"

function ConnectAndMint(props) {
    const [walletConnected, setWalletConnected] = useState(false)
    const [fallback, setFallback] = useState('')
    const [mintCount, setMintCount] = useState(1)

    const dispatch = useDispatch()
    const blockchain = useSelector((state) => state.blockchain)

    const nftPrice = 0.2
    const minMintCount = 1
    const maxMintCount = 20

    const errorMessages = [
        'Change network to ETH.',
        'Something went wrong.'
    ]
    const metamaskError = 'Install Metamask.'


    // const fbqTrack = useCallback(() => {
    //     window.fbq('track', 'Purchase');
    // })

    async function claimNFTs(_amount) {
        const
            isMintActive = await blockchain.smartContract.methods.isMintActive().call(),
            isPreSaleMintActive = await blockchain.smartContract.methods.isPreSaleMintActive().call(),

            mint = isMintActive ? blockchain.smartContract.methods.mint(blockchain.account, _amount)
                : isPreSaleMintActive ? blockchain.smartContract.methods.preSaleMint(_amount)
                    : null;

        if (mint) {
            const mintPrice = isMintActive ? await blockchain.smartContract.methods.getMintPrice().call() / 10 ** 18
                : isPreSaleMintActive ? await blockchain.smartContract.methods.getPreSaleMintPrice().call() / 10 ** 18 : 0

            mint.send({
                from: blockchain.account,
                value: blockchain.web3.utils.toWei((mintPrice * _amount).toString(), "ether")
            }).once("error", (err) => {
                if (err.code === -32000 || err.code === '-32000') {
                    setFallback('Insufficient funds, please add funds to your wallet and try again')
                } else {
                    setFallback('Sorry, something went wrong please try again ')
                }
            }).then(receipt => {
                // window.location.replace('/success')
            });
        }
    }

    function openMobileMetamask() {
        if (!walletConnected && blockchain.errorMsg === metamaskError && (isIOS || isAndroid)) {
            // mobile redirect
            // window.location.replace('https://metamask.app.link/dapp/')
        }
    }

    const normalizeMintCount = (count) => normalizeRange(count, minMintCount, maxMintCount)

    useEffect(() => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account))
            if (blockchain.account) {
                setWalletConnected(true)
            }
        }
    }, [blockchain.smartContract, dispatch])

    useEffect(() => {
        setFallback('')

        if (blockchain.errorMsg && errorMessages.includes(blockchain.errorMsg)) {
            setFallback(blockchain.errorMsg)
        }

        openMobileMetamask()
    }, [blockchain.errorMsg])

    return (
        <div>
            {walletConnected
                ? (
                    <div className={s.mint}>
                        <div className={s.mintDec}
                             onClick={() => setMintCount(normalizeMintCount(mintCount - 1))}
                        >–
                        </div>
                        <button
                            className={s.btn}
                            onClick={(e) => {
                                e.preventDefault();
                                setFallback('');
                                claimNFTs(mintCount);
                                // fbqTrack();
                            }}
                        >Mint {mintCount} ( ETH {(nftPrice * mintCount).toFixed(2)} )
                        </button>
                        <div className={s.mintInc}
                             onClick={() => setMintCount(normalizeMintCount(mintCount + 1))}
                        >+
                        </div>
                    </div>
                )
                : (
                    <button className={s.btn}
                            onClick={(e) => {
                                e.preventDefault();
                                setFallback('');
                                dispatch(connect());
                            }}
                    >Connect Wallet</button>
                )
            }

            {fallback && <p className={s.fallback}>{fallback}</p>}
        </div>
    );
}

export default ConnectAndMint;