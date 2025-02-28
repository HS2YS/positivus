import React from "react";
import LinkIcon from "./LinkIcon";

const Card = (props) => {
    return (
        <div className="card flex">
            <section className="card-layout-left flex">
                <div className="card-titles flex">
                    <h3>{props.title}</h3>
                    <h3>{props.subtitle}</h3>
                </div>
                <div className="card-link flex">
                    <LinkIcon />
                    <a href={props.link}>Learn more</a>
                </div>
            </section>
            <aside>
                <img src={props.image} alt="card-name" />
            </aside>
        </div>
    )
}

export default Card