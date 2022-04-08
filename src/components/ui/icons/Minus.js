import React from 'react';

function Minus({fill = '#ffffff', width = 32, height = 32}) {
    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-minus">
            <path
                d="M27 17.5C27.8284 17.5 28.5 16.8284 28.5 16C28.5 15.1716 27.8284 14.5 27 14.5V17.5ZM5 14.5C4.17157 14.5 3.5 15.1716 3.5 16C3.5 16.8284 4.17157 17.5 5 17.5V14.5ZM5 17.5H27V14.5H5V17.5Z"
                fill={fill}/>
        </svg>
    );
}

export default Minus;