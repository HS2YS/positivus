import React, { useEffect, useRef, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import SliderArrowIcon from './SliderArrowIcon';
import SliderNumberIcon from './SliderNumberIcon';
import '../css/sliderAnimation-min.css'

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [slideDirection, setSlideDirection] = useState('');
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            firstname: 'John',
            lastname: 'Smith',
            job: 'Marketing Director at XYZ Corp',
            text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.'
        },
        {
            id: 2,
            firstname: 'Sarah',
            lastname: 'Johnson',
            job: 'CEO at Tech Innovate',
            text: 'Positivus transformed our digital marketing strategy completely. Their data-driven approach and creative solutions helped us achieve our goals faster than expected. The ROI we have seen is remarkable.'
        },
        {
            id: 3,
            firstname: 'Michael',
            lastname: 'Chen',
            job: 'Digital Strategist at Global Solutions',
            text: 'The expertise and dedication of the Positivus team is outstanding. They delivered exceptional results in our SEO and content marketing campaigns, helping us establish a strong online presence.'
        },
        {
            id: 4,
            firstname: 'Emma',
            lastname: 'Davis',
            job: 'Founder of EcoStart',
            text: 'What sets Positivus apart is their attention to detail and strategic thinking. They don\'t just execute tasks, they provide valuable insights that have helped our business grow sustainably.'
        },
        {
            id: 5,
            firstname: 'Robert',
            lastname: 'Martinez',
            job: 'Sales Director at Future Tech',
            text: 'Since partnering with Positivus, our conversion rates have doubled. Their team\'s proactive approach and industry knowledge make them an invaluable partner for any business seeking digital growth.'
        }
    ];

    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            setIsVisible(entry.isIntersecting);
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1
        });

        if (sliderRef.current) {
            observer.observe(sliderRef.current);
        }

        return () => {
            if (sliderRef.current) {
                observer.unobserve(sliderRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            intervalRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % testimonials.length);
            }, 3500);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isVisible, testimonials.length, activeIndex]);

    const handlePrevSlide = () => {
        setSlideDirection('right');
        setActiveIndex((prev) => 
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const handleNextSlide = () => {
        setSlideDirection('left');
        setActiveIndex((prev) => 
            (prev + 1) % testimonials.length
        );
    };

    const handleDotClick = (index) => {
        setSlideDirection(index > activeIndex ? 'left' : 'right');
        setActiveIndex(index);
    };

    const getSlideClassName = (index) => {
        if (index === 1) return 'active';
        
        let className = '';
        if (slideDirection) {
            if (index === 0) {
                className = slideDirection === 'left' ? 'slide-left-out' : 'slide-right-in';
            } else if (index === 2) {
                className = slideDirection === 'left' ? 'slide-left-in' : 'slide-right-out';
            }
        }
        return className;
    };

    const getVisibleSlides = () => {
        const prevIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
        const nextIndex = (activeIndex + 1) % testimonials.length;

        return [
            testimonials[prevIndex],
            testimonials[activeIndex],
            testimonials[nextIndex]
        ];
    };

    return (
        <section className='testimonials' ref={sliderRef}>
            <div className="testimonials_block flex">
                <div className="testimonials_cards flex">
                    {getVisibleSlides().map((slide, index) => (
                        <TestimonialCard 
                            key={`${slide.id}-${index}`}
                            firstname={slide.firstname}
                            lastname={slide.lastname}
                            job={slide.job}
                            text={slide.text}
                            className={getSlideClassName(index)}
                        />
                    ))}
                </div>
                <div className="slider_handlers flex">
                    <div onClick={handlePrevSlide}>
                        <SliderArrowIcon rotate="left" className="slider-arrow" />
                    </div>
                    {testimonials.map((_, index) => (
                        <div 
                            key={index} 
                            onClick={() => handleDotClick(index)}
                        >
                            <SliderNumberIcon 
                                className={`slider-number ${activeIndex === index ? 'active' : ''}`} 
                            />
                        </div>
                    ))}
                    <div onClick={handleNextSlide}>
                        <SliderArrowIcon rotate="right" className="slider-arrow" />
                    </div>
                </div>
            </div> 
        </section>
    );
};

export default Testimonials;
