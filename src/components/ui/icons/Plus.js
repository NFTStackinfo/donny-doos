import React from 'react';

function ArrowNext({fill = '#ffffff', width = 32, height = 32}) {
    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-plus">
            <path
                d="M14.5 27C14.5 27.8284 15.1716 28.5 16 28.5C16.8284 28.5 17.5 27.8284 17.5 27H14.5ZM17.5 5C17.5 4.17157 16.8284 3.5 16 3.5C15.1716 3.5 14.5 4.17157 14.5 5H17.5ZM27 17.5C27.8284 17.5 28.5 16.8284 28.5 16C28.5 15.1716 27.8284 14.5 27 14.5V17.5ZM5 14.5C4.17157 14.5 3.5 15.1716 3.5 16C3.5 16.8284 4.17157 17.5 5 17.5V14.5ZM17.5 27V16H14.5V27H17.5ZM17.5 16V5H14.5V16H17.5ZM16 17.5H27V14.5H16V17.5ZM16 14.5H5V17.5H16V14.5Z"
                fill={fill}/>
        </svg>
    );
}

export default ArrowNext;