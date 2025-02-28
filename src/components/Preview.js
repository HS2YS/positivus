import React from "react";
import PreviewText from "./PreviewText";
import PreviewImg from "./PreviewImg";

class Preview extends React.Component {
    render() {
        return(
            <section className="preview flex">
                <PreviewText btnText="Book a consultation" />
                <PreviewImg />
            </section>
        )
    }
}

export default Preview