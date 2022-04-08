import React, {useCallback, useEffect, useState} from 'react'
import {connect} from "../../redux/blockchain/blockchainActions"
import {useDispatch, useSelector} from "react-redux"
import {fetchData} from "../../redux/data/dataActions"
import {isAndroid, isIOS} from "react-device-detect"
import {normalizeRange} from "../../utils/math"
import {Minus, Plus} from "../ui/icons";
import {truncate} from "../../utils/text";

function ConnectAndMint(props) {
    const [walletConnected, setWalletConnected] = useState(false)
    const [fallback, setFallback] = useState('')
    const [mintCount, setMintCount] = useState(1)

    const dispatch = useDispatch()
    const blockchain = useSelector((state) => state.blockchain)

    const minMintCount = 1
    const maxMintCount = 20

    const errorCodes = [
        'connection_failure_1'
    ]
    const metamaskErrorCode = 'connection_failure_3'


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
                    setFallback('Sorry, something went wrong please try again')
                }
            }).then(receipt => {
                // window.location.replace('/success')
            });
        }
    }

    function openMobileMetamask() {
        if (!walletConnected && blockchain.error.code === metamaskErrorCode && (isIOS || isAndroid)) {
            // mobile redirect
            window.location.replace('https://metamask.app.link/dapp/meta-chess-club.web.app/')
        }
    }

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

        if (blockchain.error.code && errorCodes.includes(blockchain.error.code)) {
            setFallback(blockchain.error.message)
        }

        openMobileMetamask()
    }, [blockchain.error])

    return (
        <div className="flex flex-col items-center">
            {walletConnected
                ? (
                    <>
                        <p className="white-text fs-500 text-center">
                            Wallet Address -&nbsp;
                            {blockchain.account.slice(0, 2) + truncate(blockchain.account.slice(2), 12, '....')}
                        </p>

                        <div className="mint-button-container flex flex-row items-center gap-4 margin-top-10 justify-center">
                            <div className="mint-count-btn btn btn--secondary">
                                <button className="dec btn"
                                        onClick={() => setMintCount(normalizeRange(mintCount - 1, minMintCount, maxMintCount))}
                                ><Minus/>
                                </button>
                                <span className="count">{mintCount}</span>
                                <button className="inc btn"
                                        onClick={() => setMintCount(normalizeRange(mintCount + 1, minMintCount, maxMintCount))}
                                ><Plus/>
                                </button>
                            </div>
                            <button
                                className="btn btn--primary mint-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setFallback('');
                                    claimNFTs(mintCount);
                                    // fbqTrack();
                                }}
                            >Mint Now
                            </button>
                        </div>
                    </>
                )
                : (
                    <>
                        {fallback
                            ? <p className="warning text-center warning-text fs-500 white-text">{fallback}</p>
                            : <p className="text-center fs-500 white-text">Connect wallet to mint</p>
                        }

                        <button className="btn btn--primary margin-top-6"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setFallback('');
                                    dispatch(connect());
                                    openMobileMetamask();
                                }}
                        >Connect Wallet
                        </button>
                    </>
                )
            }
        </div>
    );
}

export default ConnectAndMint;