import React from "react";

const Company = ({ path, alt }) => {
    return (
        <div className="company">
            <img src={path} alt={alt} />
        </div>
    )
}

export default Company