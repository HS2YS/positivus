import React from "react";
import LinkIcon from "./LinkIcon";

const Study = (props) => {
    return (
        <div className="study_layout flex">
            <p className="study_text">{props.text}</p>
            <div className="study_link_block flex">
                <a href={props.link}>Learn more</a>
                <LinkIcon />
            </div>
        </div>
    )
}

export default Study