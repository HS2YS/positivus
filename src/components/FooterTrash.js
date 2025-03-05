import React from 'react';
import Link from './Link';

const FooterTrash = ({ copyright = '2024' }) => {
    return (
        <div className='footerTrash flex'>
            <p>© {copyright} Positivus. All Rights Reserved.</p>
            <Link link='#' text='Privacy Policy' />
        </div>
    );
}

export default FooterTrash;
