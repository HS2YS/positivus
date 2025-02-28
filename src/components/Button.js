import React from "react";

const Button = ({text = "Click me", className}) => {
    return (
        <button type="button" className={`${className}` || ''}>{text}</button>
    )
}

export default Button