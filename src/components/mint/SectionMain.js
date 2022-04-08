import React, {forwardRef} from 'react';
import ConnectAndMint from "./ConnectAndMint";

const SectionMain = forwardRef((props, ref) => {
    return (
        <main className="mint-section-main" id="main" ref={ref}>
            <div className="mint-section-main__banner">
                <img src="/assets/mint-main-banner.jpg" alt="Donny Doos" />
            </div>

            <div className="mint-container container">
                <h1 className="uppercase ff-primary ls-2 fw-normal white-text text-center margin-bottom-6">Lorem ipsum</h1>

                <ConnectAndMint/>
            </div>
        </main>
    );
})

export default SectionMain;