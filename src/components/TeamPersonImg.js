import React, { useState } from 'react';
import John from "../img/team/John.png";
import Jane from "../img/team/Jane.png";
import Michael from "../img/team/Michael.png";
import Emily from "../img/team/Emily.png";
import Brian from "../img/team/Brian.png";
import Sarah from "../img/team/Sarah.png";

const avatars = {
    "John.png": John,
    "Jane.png": Jane,
    "Michael.png": Michael,
    "Emily.png": Emily,
    "Brian.png": Brian,
    "Sarah.png": Sarah
};

const TeamPersonImg = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setHasError(true);
    };

    return (
        <div className="person_img">
            {imageLoaded && !hasError && (
                <svg xmlns="http://www.w3.org/2000/svg" width="99" height="98" viewBox="0 0 99 98" fill="none">
                    <path d="M84.631 48.9117C117.473 86.3213 87.1455 116.649 49.7359 83.8068C12.3263 116.649 -18.0016 86.3213 14.8408 48.9117C-18.0016 11.5021 12.3263 -18.8258 49.7359 14.0166C87.1455 -18.8258 117.473 11.5021 84.631 48.9117Z" fill="#231F20"/>
                </svg>
            )}
            <img 
                src={avatars[props.avatar]} 
                alt={props.avatar}
                onLoad={handleImageLoad}
                onError={handleImageError}
            />
        </div>
    );
}

export default TeamPersonImg;
