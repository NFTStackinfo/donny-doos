import React, {forwardRef} from 'react';

const SectionMain = forwardRef((props, ref) => {
    return (
        <main className="section-main" id="main" ref={ref}>
            <img src="/assets/main-banner.jpg" alt="Donny Doos"/>
        </main>
    );
})

export default SectionMain;