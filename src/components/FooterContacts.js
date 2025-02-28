import React from 'react';

const FooterContacts = ({ title = 'Contact us:', email, phone, address}) => {
    return (
        <div className="footer_contacts_layout flex">
            <h4>{title}</h4>
            <div className="footer-contacts-text flex">
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>
            </div>
        </div>
    );
}

export default FooterContacts;
