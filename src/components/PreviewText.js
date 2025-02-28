import React from "react";
import Button from "./Button";

class PreviewText extends React.Component {
    title = "Navigating the digital landscape for success"
    description = "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation."


    render() {
        return(
            <section className="preview-text flex">
                <h1>{this.title}</h1>
                <h4>{this.description}</h4>
                <Button text={this.props.btnText} />
            </section>
        )
    }
}

export default PreviewText