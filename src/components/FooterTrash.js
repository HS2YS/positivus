import React from 'react';

const FooterTrash = ({ copyright = '2024' }) => {
    return (
        <div className='footerTrash flex'>
            <p>© {copyright} Positivus. All Rights Reserved.</p>
            <a>Privacy Policy</a>
        </div>
    );
}

export default FooterTrash;
