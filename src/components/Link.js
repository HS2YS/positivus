import React from "react";

const Link = ({ text, link}) => {
    return(
        <li><a href={link}>{text}</a></li>
    )
}

export default Link