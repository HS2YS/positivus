import React from "react";
import Company from "./Company";
import amazonLogo from '../img/companies/amazon.svg';
import dribbbleLogo from '../img/companies/dribbble.svg';
import hubspotLogo from '../img/companies/HubSpot.svg';
import netflixLogo from '../img/companies/netflix.svg';
import notionLogo from '../img/companies/notion.svg';
import zoomLogo from '../img/companies/zoom.svg';

class Companies extends React.Component {
    companies = [
        {
            id: 1,
            name: 'Amazon',
            path: amazonLogo
        },
        {
            id: 2,
            name: 'dribbble',
            path: dribbbleLogo
        },
        {
            id: 3,
            name: 'HubSpot',
            path: hubspotLogo
        },
        {
            id: 4,
            name: 'Netflix',
            path: netflixLogo
        },
        {
            id: 5,
            name: 'Notion',
            path: notionLogo
        },
        {
            id: 6,
            name: 'Zoom',
            path: zoomLogo
        }
    ]

    render() {
        return(
            <section className="сompanies flex">
                {this.companies.map((el) => <Company key={el.id} alt={el.name} path={el.path} />)}
            </section>
        )
    }
}

export default Companies