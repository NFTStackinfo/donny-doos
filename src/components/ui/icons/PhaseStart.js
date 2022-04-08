import React from 'react';

function PhaseStart({fill = '#ffffff'}) {
    return (
        <svg width={27} height={48} viewBox="0 0 27 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-phase-start">
            <path d="M11 0H15V41C15 42.1046 14.1046 43 13 43C11.8954 43 11 42.1046 11 41V0Z" fill={fill}/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M25.1835 32.9618C25.88 33.6583 25.88 34.7875 25.1835 35.484L13.2217 47.4458L1.25989 35.484C0.563407 34.7875 0.563406 33.6583 1.25989 32.9618C1.95637 32.2653 3.08559 32.2653 3.78207 32.9618L13.2217 42.4014L22.6613 32.9618C23.3578 32.2653 24.487 32.2653 25.1835 32.9618Z"
                  fill={fill}/>
        </svg>
    );
}

export default PhaseStart;