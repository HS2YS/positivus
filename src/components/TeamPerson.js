import React from 'react';
import TeamPersonImg from './TeamPersonImg';
import PersonLinkIcon from './PersonLinkIcon';

const TeamPerson = (props) => {

    return (
        <div className='team_card flex'>
            <div className="person_title_block flex">
                <TeamPersonImg avatar={props.avatar} alt={`${props.firstname} ${props.lastname}`}/>
                <div className="person_info flex">
                    <h4>{props.firstname} {props.lastname}</h4>
                    <p>{props.job}</p>
                </div>
                <PersonLinkIcon link={props.linkedIn} />
            </div>
            <div className="person_line"></div>
            <div className="person_bio">
                <p>{props.bio}</p>
            </div>
        </div>
    );
}

export default TeamPerson;
