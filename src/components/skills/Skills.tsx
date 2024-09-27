import { FC } from 'react';
import Bubble from '../shared/bubble/Bubble';
import { SkillGroups } from './data';
import './Skills.css';

const Skills: FC = () => {
  return (
    <div className="skill-groups">
      {SkillGroups.map((group) => (
        <div className="skill-group" key={group.title}>
          <span className="skill-group-title">{group.title}</span>
          <ul className="skill-list">
            {group.skills.map((skill) => (
              <li className="skill" key={skill}>
                <Bubble value={skill} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
