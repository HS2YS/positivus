import React from "react";
import Study from "./Study";

class Studies extends React.Component {
    studies = [
        {
            id: 1,
            text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
            link: "#"
        },
        {
            id: 2,
            text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
            link: "#"
        },
        {
            id: 3,
            text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
            link: "#"
        },
    ]

    render () {
        return (
            <section className="case_studies">
            <div className="case_studies_block flex">
                {this.studies.map((el, index) => (
                <React.Fragment key={el.id}>
                    <Study
                    text={el.text}
                    link={el.link}
                    />
                    {(index + 1) % 3 !== 0 && <div className="study_line"></div>}
                </React.Fragment>
                ))}
            </div>
            </section>
        )
    }
}

export default Studies