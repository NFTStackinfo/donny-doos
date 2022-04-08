import React from 'react';

function CollectionElement({fill = '#ffffff'}) {
    return (
        <svg width={16} height={54} viewBox="0 0 16 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-collection-element">
            <path
                d="M6 2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2V41C10 42.1046 9.10457 43 8 43C6.89543 43 6 42.1046 6 41V2Z"
                fill={fill}/>
            <circle cx={8} cy={46} r={8} fill={fill}/>
        </svg>
    );
}

export default CollectionElement;