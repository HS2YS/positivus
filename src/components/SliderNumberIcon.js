import React from 'react';
import '../css/sliderAnimation-min.css'

const SliderIcon = () => {
    return (
        <g style={{
            animation: "sliderIcon 7s ease-in-out infinite",
            transformOrigin: "center",
            transformBox: "fill-box"
        }}
        >
            <path d="M139.01 2.05941L146 0L143.96 7.0099L146 14L139.01 11.9604L132 14L134.059 7.0099L132 0L139.01 2.05941Z"/>
        </g>
    )
}

const SliderNumberIcon = ({ className }) => {
    return (
        <svg className={`${className || ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="130 -2 18 18" fill="none">
            <SliderIcon />
        </svg>
    );
}

export default SliderNumberIcon;
