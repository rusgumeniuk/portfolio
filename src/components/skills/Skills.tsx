import { FC } from 'react';
import Divider from '../shared/divider/Divider';
import SkillList from '../shared/skill-list/SkillList';
import { SkillGroups } from './data';
import './Skills.css';
import styles from './Skills.module.css';

const Skills: FC = () => {
  return (
    <div className="skills-container">
      <h3 className="title">Skills</h3>
      <Divider />
      <div className="skill-groups">
        {SkillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <span className="skill-group-title">{group.title}</span>
            <div className="skill-list-container">
              {/* TODO: mark skills with non commerce experience in a different color */}
              <SkillList
                mainSkills={group.skills
                  .filter(
                    (x) => !x.levelOfUsage || x.levelOfUsage === 'Commercial'
                  )
                  .map((x) => x.title)}
                additionalSkills={group.skills
                  .filter((x) => x.levelOfUsage === 'NonCommercial')
                  .map((x) => x.title)}
                additionalSkillsClassName={styles.additional}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
