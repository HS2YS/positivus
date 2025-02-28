import React, { Component } from 'react';
import Button from './Button'

class ContactForm extends Component {
    render() {
        return (
            <form className='contact-form flex'>
                <div className="radio-btn-layout flex">
                    <div className="radio-btn">
                        <input type="radio" id='sayHi' name='radio' />
                        <label htmlFor="sayHi">Say hi</label>
                    </div>
                    <div className="radio-btn">
                        <input type="radio" id='GetQuote' name='radio' />
                        <label htmlFor="getQuote">Get a Quote</label>
                    </div>
                </div>
                <div className="input-layout flex">
                    <div className="input-label-layout">
                        <label htmlFor="Name">Name</label>
                        <input type="text" id='Name' placeholder='Name'/>
                    </div>
                    <div className="input-label-layout">
                        <label htmlFor="email">Email<sup>*</sup></label>
                        <input type="email" id='email' placeholder='Email' required/>
                    </div>
                    <div className="input-label-layout">
                        <label htmlFor="message">Message<sup>*</sup></label>
                        <textarea name='message' id='message' placeholder='Message' required/>
                    </div>
                    <Button text='Send Message' />
                </div>
            </form>
        );
    }
}

export default ContactForm;
