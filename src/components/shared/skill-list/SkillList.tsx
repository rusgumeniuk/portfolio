import { FC } from 'react';
import styles from './SkillList.module.css';

interface SkillListProps {
  mainSkills: string[];
  additionalSkills?: string[];
  additionalSkillsClassName?: string;
  additionalSkillsNote?: string;
}

const SkillList: FC<SkillListProps> = ({
  mainSkills,
  additionalSkills,
  additionalSkillsClassName,
  additionalSkillsNote,
}) => {
  return (
    <ul className={styles['skill-list']}>
      {mainSkills.map((skill) => (
        <li className={styles.skill} key={skill}>
          <span>{skill}</span>
        </li>
      ))}
      {additionalSkills &&
        additionalSkills.map((skill) => (
          <li
            className={`${styles.skill} ${styles['additional-skill']} ${additionalSkillsClassName}`}
            key={skill}
          >
            <span>{skill}</span>
            {additionalSkillsNote && (
              <div className={styles.hint}>
                <span>{additionalSkillsNote}</span>
              </div>
            )}
          </li>
        ))}
    </ul>
  );
};

export default SkillList;
