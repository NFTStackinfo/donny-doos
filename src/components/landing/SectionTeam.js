import React, {forwardRef} from 'react';
import teamData from "../../data/team-data";
import Fade from "react-reveal/Fade";

function TeamMember({name, description, image, link = null}) {
    return (
        <div className="team-member">
            <img src={image} alt={name} className="team-member__image"/>
            {link
                ? <a href={link} target="_blank" className="team-member__name uppercase black-text fw-bold fs-500 margin-top-6">{name}</a>
                : <h3 className="team-member__name uppercase black-text fw-bold fs-500 margin-top-6">{name}</h3>
            }
            <div className="team-member__description text-center black-text margin-top-4">
                {description}
            </div>
        </div>
    );
}

const SectionTeam = forwardRef((props, ref) => {
    return (
        <section id="team" className="section section-team" ref={ref}>
            <div className="container">
                <h2 className="uppercase ff-primary fs-900 ls-2 fw-normal primary-text text-center">The team</h2>

                <div className="team-container flex flex-wrap justify-center">
                    {teamData.map(member => (
                        <Fade  key={member.name}>
                            <TeamMember{...member}/>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    );
})

export default SectionTeam;