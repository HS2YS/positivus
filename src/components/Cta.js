import React from "react";
import CTAText from "./CtaText";
import CTAImg from "./CtaImg";

class CTA extends React.Component {
    render () {
        return (
            <section className="cta_block">
                <div className="cta_layout flex">
                <CTAText 
                title="Let’s make things happen" 
                text="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."/>
                <CTAImg />
                </div>
            </section>
        )
    }
}

export default CTA