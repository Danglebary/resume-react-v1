import React from 'react';
import './SkillsList.css';
import SkillLevelBar from '../SkillLevelBar/SkillLevelBar';
import {
    frontEndSkills,
    backEndSkills,
    dataSkills,
    langaugeSkills
} from '../../data';

interface Props {
    id: string;
    title: string;
}

const SkillsList = ({ id, title }: Props) => {
    return (
        <div className="skills-list-container">
            <h2 id={id} className="skills-list-title">
                {title}
            </h2>
            <div className="skills-container">
                <div className="skills-langauge">
                    <h4 className="skills-title">Languages</h4>
                    {langaugeSkills.map(({ skillName, skillLevel }, index) => (
                        <div
                            className="skill-item-container"
                            key={'language' + index}
                        >
                            <p className="skill-item-label">{skillName}</p>
                            <SkillLevelBar skillLevel={skillLevel} />
                        </div>
                    ))}
                </div>
                <div className="skills-front-end">
                    <h4 className="skills-title">Front End</h4>
                    {frontEndSkills.map(({ skillName, skillLevel }, index) => (
                        <div
                            className="skill-item-container"
                            key={'front-end' + index}
                        >
                            <p className="skill-item-label">{skillName}</p>
                            <SkillLevelBar skillLevel={skillLevel} />
                        </div>
                    ))}
                </div>
                <div className="skills-back-end">
                    <h4 className="skills-title">Back End</h4>
                    {backEndSkills.map(({ skillName, skillLevel }, index) => (
                        <div
                            className="skill-item-container"
                            key={'back-end' + index}
                        >
                            <p className="skill-item-label">{skillName}</p>
                            <SkillLevelBar skillLevel={skillLevel} />
                        </div>
                    ))}
                </div>
                <div className="skills-data">
                    <h4 className="skills-title">Data Mgmt.</h4>
                    {dataSkills.map(({ skillName, skillLevel }, index) => (
                        <div
                            className="skill-item-container"
                            key={'data' + index}
                        >
                            <p className="skill-item-label">{skillName}</p>
                            <SkillLevelBar skillLevel={skillLevel} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsList;
