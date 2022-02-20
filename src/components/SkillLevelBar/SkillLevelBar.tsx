import React from 'react';
import './SkillLevelBar.css';

interface Props {
    skillLevel: number;
}

const SkillLevelBar = ({ skillLevel }: Props) => {
    const fillerStyles = {
        width: `${skillLevel}%`
    };

    return (
        <div className="skill-level-bar-container">
            <div className="skill-level-bar-filler" style={fillerStyles} />
        </div>
    );
};

export default SkillLevelBar;
