import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactImg from './ContactImg';

class Contact extends Component {
    render() {
        return (
            <section className='contact'>
                <div className="contact_block flex">
                    <ContactForm />
                    <ContactImg />
                </div>
            </section>
        );
    }
}

export default Contact;
