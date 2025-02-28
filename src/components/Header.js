import React from "react";
import Logotype from "./Logotype";
import Button from "./Button";
import NavBar from "./NavBar";


class Header extends React.Component {

    render() {
        return (
            <header>
                <div className="nav-bar flex">
                    <Logotype />
                    <NavBar />
                    <Button  text="Request a quote"/>
                </div>
            </header>
        )
    }
    
}

export default Header