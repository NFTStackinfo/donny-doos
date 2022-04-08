import React from 'react';

function LineNeon({fill='#ffffff', height=500}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height={height} viewBox={`0 0 24 ${height}`} fill="none" className="icon-line-neon">
            <g filter="url(#filter0_f_500_496)">
                <path d={`M12 12L12 ${height-12}`} stroke={fill} strokeWidth="8" strokeLinecap="round"/>
            </g>
            <path d={`M12 12L12 ${height-12}`} stroke={fill} strokeWidth="5" strokeLinecap="round"/>
            <defs>
                <filter id="filter0_f_500_496" x="0" y="0" width="24" height={height*2} filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_500_496"/>
                </filter>
            </defs>
        </svg>

    );
}

export default LineNeon;