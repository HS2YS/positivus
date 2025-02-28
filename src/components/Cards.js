import React from "react";
import Card from "./Card";
import SearchEngine from '../img/cards/search.png'
import Pay from '../img/cards/Pay.png'
import SocialMedia from '../img/cards/SocialMedia.png'
import Email from '../img/cards/Email.png'
import Content from '../img/cards/Content.png'
import Analytics from '../img/cards/Analytics.png'


class Cards extends React.Component {
    services = [
        {
            id: 1,
            title: 'Search engine',
            subtitle: 'optimization',
            link: '#',
            image: SearchEngine
        },
        {
            id: 2,
            title: 'Pay-per-click',
            subtitle: 'advertising',
            link: '#',
            image: Pay
        },
        {
            id: 3,
            title: 'Social Media',
            subtitle: 'Marketing',
            link: '#',
            image: SocialMedia
        },
        {
            id: 4,
            title: 'Email',
            subtitle: 'Marketing',
            link: '#',
            image: Email
        },
        {
            id: 5,
            title: 'Content',
            subtitle: 'Creation',
            link: '#',
            image: Content
        },
        {
            id: 6,
            title: 'Analytics and ',
            subtitle: 'Tracking',
            link: '#',
            image: Analytics
        },
    ]

    render () {
        return (
            <section className="cards-wrap flex">
                {this.services.map((el) => <Card 
                key={el.id}
                title={el.title}
                subtitle={el.subtitle}
                link={el.link}
                image={el.image}
                />)}
            </section>
        )
    }
}

export default Cards