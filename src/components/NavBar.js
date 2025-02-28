import React from "react";
import Link from "./Link";

class NavBar extends React.Component {
    links = [
        {
            id: 1,
            linkName: 'About us',
            link: '#',
        },
        {
            id: 2,
            linkName: 'Services',
            link: '#',
        },
        {
            id: 3,
            linkName: 'Use Cases',
            link: '#',
        },
        {
            id: 4,
            linkName: 'Pricing',
            link: '#',
        },
        {
            id: 5,
            linkName: 'Blog',
            link: '#'
        },
    ]

    render() {
        return (
        <ul className="nav-bar-links flex">
                {this.links.map((el) => <Link key={el.id} text={el.linkName} link={el.link} />)}
        </ul>
        );
    }
}
export default NavBar