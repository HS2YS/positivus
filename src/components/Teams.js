import React, { Component } from 'react';
import TeamPerson from './TeamPerson';

class Teams extends Component {
    persons = [
        {
            id: 1,
            firstname: 'John',
            lastname: 'Smith',
            job: 'CEO and Founder',
            bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
            avatar: 'John.png',
            linkedIn: '#',
        },
        {
            id: 2,
            firstname: 'Jane',
            lastname: 'Doe',
            job: 'Director of Operations',
            bio: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
            avatar: 'Jane.png',
            linkedIn: '#',
        },
        {
            id: 3,
            firstname: 'Michael',
            lastname: 'Brown',
            job: 'Senior SEO Specialist',
            bio: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
            avatar: 'Michael.png',
            linkedIn: '#',
        },
        {
            id: 4,
            firstname: 'Emily',
            lastname: 'Johnson',
            job: 'PPC Manager',
            bio: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
            avatar: 'Emily.png',
            linkedIn: '#',
        },
        {
            id: 5,
            firstname: 'Brian',
            lastname: 'Williams',
            job: 'Social Media Specialist',
            bio: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
            avatar: 'Brian.png',
            linkedIn: '#',
        },
        {
            id: 6,
            firstname: 'Sarah',
            lastname: 'Kim',
            job: 'Content Creator',
            bio: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
            avatar: 'Sarah.png',
            linkedIn: '#',
        },
    ]

    render() {
        return (
            <section className='teams flex'>
                {this.persons.map((el) => (
                    <React.Fragment key={el.id}>
                        <TeamPerson 
                            firstname={el.firstname}
                            lastname={el.lastname}
                            job={el.job}
                            bio={el.bio}
                            avatar={el.avatar}
                            linkedIn={el.linkedIn}
                        />
                    </React.Fragment>
                ))}
            </section>
        );
    }
}

export default Teams;
