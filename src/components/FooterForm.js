import React from 'react';
import Button from './Button';

const FooterForm = () => {
    return (
        <form className='footerForm flex'>
            <input type="email" placeholder='Email' />
            <Button text='Subscribe to news' />
        </form>
    );
}

export default FooterForm;
