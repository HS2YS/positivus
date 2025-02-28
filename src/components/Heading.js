import React from "react";

const Heading = ({ title, text, className }) => {
    return (
        <section className={`heading flex ${className || ''}`}>
            <h2 className="heading-title">{title}</h2>
            <p className="heading-text">{text}</p>
        </section>
    )
}

export default Heading