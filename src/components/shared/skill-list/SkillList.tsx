import { FC } from 'react';
import './SkillList.css';

interface SkillListProps {
  mainSkills: string[];
  additionalSkills?: string[];
  additionalSkillsClassName?: string;
}

const SkillList: FC<SkillListProps> = ({
  mainSkills,
  additionalSkills,
  additionalSkillsClassName,
}) => {
  return (
    <ul className="skill-list">
      {mainSkills.map((skill) => (
        <li className="skill" key={skill}>
          <span>{skill}</span>
        </li>
      ))}
      {additionalSkills &&
        additionalSkills.map((skill) => (
          <li className={`skill ${additionalSkillsClassName}`} key={skill}>
            <span>{skill}</span>
          </li>
        ))}
    </ul>
  );
};

export default SkillList;
