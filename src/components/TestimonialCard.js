import React from 'react';
import Bubble from './Bubble';

const TestimonialCard = ({ firstname, lastname, job, text, className }) => {
    return (
        <div className={`testimonials_card flex ${className || ''}`}>
            <div className="card_bubble flex">
                <Bubble />
                <p>"{text}"</p>
            </div>
            <div className="testimonials_author_info flex">
                <h4 className='testimonials_author'>{firstname} {lastname}</h4>
                <h4>{job}</h4>
            </div>
        </div>
    );
}

export default TestimonialCard;
