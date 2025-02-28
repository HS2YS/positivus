import React, { Component } from 'react';
import Logotype from './Logotype';
import NavBar from './NavBar';
import FooterIcons from './FooterIcons';
import FooterContacts from './FooterContacts';
import FooterForm from './FooterForm';
import FooterTrash from './FooterTrash';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer_block flex">
                    <div className="footer-navBar-layout flex">
                        <Logotype />
                        <NavBar />
                        <div className="footerIcons_group flex">
                            <FooterIcons icon='LinkedIn' />
                            <FooterIcons icon='Facebook' />
                            <FooterIcons icon='Twitter' />
                        </div>
                    </div>
                    <div className="footer_contacts_block flex">
                        <FooterContacts
                            email="info@positivus.com"
                            phone="555-567-8901"
                            address="1234 Main St
                            Moonstone City, Stardust State 12345"
                        />
                        <FooterForm />
                    </div>
                    <div className="footer-line"></div>
                    <FooterTrash
                        copyright='2025'
                    />
                </div>
            </footer>
        );
    }
}

export default Footer;
