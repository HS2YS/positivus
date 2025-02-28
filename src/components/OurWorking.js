import React from "react";
import OurWorkingCard from "./OurWorkingCard";

class OurWorking extends React.Component {
    ourWorking = [
        {
            id: 1,
            title: "Consultation",
            text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        },
        {
            id: 2,
            title: "Research and Strategy Development",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia adipisci id eum incidunt dignissimos, eveniet, et reiciendis quas at, recusandae nesciunt cupiditate veritatis vel aut tempora neque totam! Cupiditate tempora eos officiis voluptas consectetur, velit aliquam doloremque saepe at.", 
        },
        {
            id: 3,
            title: "Implementation",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia adipisci id eum incidunt dignissimos, eveniet, et reiciendis quas at, recusandae nesciunt cupiditate veritatis vel aut tempora neque totam!",
        },
        {
            id: 4,
            title: "Monitoring and Optimization",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia adipisci id eum incidunt dignissimos, eveniet, et reiciendis quas at, recusandae nesciunt cupiditate veritatis vel aut tempora neque totam! Cupiditate tempora eos .",
        },
        {
            id: 5,
            title: "Reporting and Communication",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia adipisci id eum incidunt dignissimos",
        },
        {
            id: 6,
            title: "Continual Improvement",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia adipisci id eum incidunt dignissimos, eveniet, et reiciendis quas at, recusandae nesciunt cupiditate veritatis vel aut tempora neque totam! Cupiditate tempora",
        },
        
    ]

    render () {
        return (
            <section className="ourWorking flex">
            {this.ourWorking.map((el, index) => (
                <React.Fragment key={el.id}>
                <OurWorkingCard 
                title={el.title}
                text={el.text}
                number={String(index + 1).padStart(2, '0')}
                />
                </React.Fragment>
            ))}
            </section>
        )
    }
}
export default OurWorking