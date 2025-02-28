import React from "react";
import Button from "./Button"

const CTAText = (props) => {
    return (
        <div className="cta_text_block flex">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <Button text="Get your free proposal" />
        </div>
    )
}

export default CTAText