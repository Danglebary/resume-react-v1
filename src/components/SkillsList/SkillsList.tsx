// General imports
import React from 'react';
// Style imports
import './SkillsList.css';
// Component imports
import SkillLevelBar from '../SkillLevelBar/SkillLevelBar';

interface Props {
    id: string;
    title: string;
    skills: SkillData[];
}

const SkillsList = ({ id, title, skills }: Props) => {
    return (
        <div className="skills-list-container">
            <h2 id={id} className="skills-list-title">
                {title}
            </h2>
            {skills.map(({ skillName, skillLevel }, index) => {
                return (
                    <div className="skill-item-container" key={index}>
                        <p className="skill-item-label">{skillName}</p>
                        <SkillLevelBar skillLevel={skillLevel} />
                    </div>
                );
            })}
        </div>
    );
};

export default SkillsList;
