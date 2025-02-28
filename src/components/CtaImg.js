import * as React from "react";
import "../css/CtaImgAnimation-min.css"

// Окружности
const Ellipse1 = () => (
    <g style={{
        animation: "ellipce 4s linear infinite",
        transformOrigin: "center",
        transformBox: "fill-box",
        perspective: "1000px"
      }}>
        <path
        stroke="#000"
        d="M337.5 198.5c0 2.278-1.097 4.552-3.292 6.806-2.196 2.255-5.462 4.454-9.711 6.564-8.497 4.22-20.825 8.034-36.099 11.243C257.858 229.528 215.644 233.5 169 233.5s-88.858-3.972-119.398-10.387C34.328 219.904 22 216.09 13.503 211.87c-4.25-2.11-7.515-4.309-9.711-6.564C1.597 203.052.5 200.778.5 198.5s1.097-4.552 3.292-6.806c2.196-2.255 5.462-4.454 9.711-6.564 8.497-4.22 20.825-8.034 36.099-11.243C80.142 167.472 122.356 163.5 169 163.5s88.858 3.972 119.398 10.387c15.274 3.209 27.602 7.023 36.099 11.243 4.249 2.11 7.515 4.309 9.711 6.564 2.195 2.254 3.292 4.528 3.292 6.806Z"
        ></path>
    </g>
)
const Ellipse2 = () => (
    <g style={{
        animation: "ellipce 4s linear infinite",
        transformOrigin: "center",
        transformBox: "fill-box",
        perspective: "1000px"
      }}>
        <path
        stroke="#000"
        d="M337.5 223.5c0 2.278-1.097 4.552-3.292 6.806-2.196 2.255-5.462 4.454-9.711 6.564-8.497 4.22-20.825 8.034-36.099 11.243C257.858 254.528 215.644 258.5 169 258.5s-88.858-3.972-119.398-10.387C34.328 244.904 22 241.09 13.503 236.87c-4.25-2.11-7.515-4.309-9.711-6.564C1.597 228.052.5 225.778.5 223.5s1.097-4.552 3.292-6.806c2.196-2.255 5.462-4.454 9.711-6.564 8.497-4.22 20.825-8.034 36.099-11.243C80.142 192.472 122.356 188.5 169 188.5s88.858 3.972 119.398 10.387c15.274 3.209 27.602 7.023 36.099 11.243 4.249 2.11 7.515 4.309 9.711 6.564 2.195 2.254 3.292 4.528 3.292 6.806Z"
        ></path>
    </g>
)
const Ellipse3 = () => (
    <g style={{
        animation: "ellipce 4s linear infinite",
        transformOrigin: "center",
        transformBox: "fill-box",
        perspective: "1000px"
      }}>
        <path
            stroke="#000"
            d="M337.5 248.5c0 2.278-1.097 4.552-3.292 6.806-2.196 2.255-5.462 4.454-9.711 6.564-8.497 4.22-20.825 8.034-36.099 11.243C257.858 279.528 215.644 283.5 169 283.5s-88.858-3.972-119.398-10.387C34.328 269.904 22 266.09 13.503 261.87c-4.25-2.11-7.515-4.309-9.711-6.564C1.597 253.052.5 250.778.5 248.5s1.097-4.552 3.292-6.806c2.196-2.255 5.462-4.454 9.711-6.564 8.497-4.22 20.825-8.034 36.099-11.243C80.142 217.472 122.356 213.5 169 213.5s88.858 3.972 119.398 10.387c15.274 3.209 27.602 7.023 36.099 11.243 4.249 2.11 7.515 4.309 9.711 6.564 2.195 2.254 3.292 4.528 3.292 6.806Z"
        ></path>
    </g>
)

// Звезды
const Star1 = () => (
    <g style={{
        animation: "stars 5s ease-in-out infinite",
        transformOrigin: "center",
        transformBox: "fill-box",
    }}>
        <path
        fill="#D9D9D9"
        d="m277 177 17.789 45.06 46.321-14.186-24.138 42.003 39.972 27.37-47.889 7.316 3.523 48.316L277 300l-35.578 32.879 3.523-48.316-47.889-7.316 39.972-27.37-24.138-42.003 46.321 14.186z"
        ></path>
    </g>
)
const Star2 = () => (
    <g style={{
        animation: "stars-reverse 5s ease-in-out infinite",
        transformOrigin: "center",
        transformBox: "fill-box",
    }}>
        <path
        fill="#B9FF66"
        d="m106.744 290.564 21.825-39.965 22.001 39.965 39.969 21.863-39.969 21.863-22.001 39.965-21.825-39.965L66.6 312.427z"
        ></path>
    </g>
)
const Star3 = () => (
    <g style={{
        animation: "stars-reverse 5s ease-in-out infinite",
        transformOrigin: "center",
        transformBox: "fill-box",
    }}>
        <path
            stroke="#000"
            d="M252.343 66.63l.168.905.668-.634 47.132-44.724-27.97 58.646-.396.831.913-.12 64.418-8.479-57.099 31.006-.809.439.809.439 57.099 31.006-64.418-8.479-.913-.12.396.831 27.97 58.646-47.132-44.724-.668-.634-.168.906-11.843 63.886-11.843-63.886-.168-.906-.668.634-47.132 44.724 27.97-58.646.396-.831-.913.12-64.418 8.479 57.099-31.006.809-.439-.809-.439-57.099-31.006 64.418 8.479.913.12-.396-.831-27.97-58.646 47.132 44.724.668.634.168-.906L240.5 2.743z"
        ></path>
    </g>
)

// Main
const Body = () => (
    <g style={{
        animation: "bodyanim 6s ease-in-out infinite",
        transformOrigin: "center",
        transformBox: "fill-box",
    }}>
        <circle cx="152.5" cy="186.5" r="62" fill="#000" stroke="#000"></circle>
    </g>
)
// Eyes
const Eye1 = () => (
    <g style={{
        animation: "eyes 4s ease-in-out infinite",
        transformOrigin: "center",
        transformBox: "fill-box",
    }}>
        <ellipse cx="132" cy="173" fill="#fff" rx="10" ry="20"></ellipse>
    </g>
)
const Eye2 = () => (
    <g style={{
        animation: "eyes 4s ease-in-out infinite",
        transformOrigin: "center",
        transformBox: "fill-box",
    }}>
        <ellipse cx="173" cy="173" fill="#fff" rx="10" ry="20"></ellipse>
    </g>
)





const CTAImg = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="359"
        height="375"
        fill="none"
        viewBox="0 0 359 375"
    >
        <Ellipse1 />
        <Ellipse2 />
        <Ellipse3 />
        <Star1 />
        <Star2 />
        <Star3 />
        <Body />
        <Eye1 />
        <Eye2 />
    </svg>
);

export default CTAImg;
