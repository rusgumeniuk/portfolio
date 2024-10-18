import { FC } from 'react';
import { JobProject } from '../../models/job';
import Period from '../shared/period/Period';
import SkillList from '../shared/skill-list/SkillList';
import './Project.css';

interface ProjectProperties {
  project: JobProject;
}

const Project: FC<ProjectProperties> = ({ project }) => {
  return (
    <div className="project">
      <div className="project-head">
        <div className="project-period">
          <Period
            startedDate={project.startedOn}
            endedDate={project.endedOn}
            localization="en"
          />
        </div>
        <div className="project-title title">
          <strong>Project &quot;{project.domain ?? project.title}&quot;</strong>
        </div>
      </div>
      <div className="project-technologies">
        <SkillList mainSkills={project.technologies} />
      </div>
      {/* TODO: add team description */}
      {/* <div className={styles['project-team']}>
        <span>Team:</span>
        <div className={styles['team-description']}>
          <span>{project.team.composition}</span>
          <span>team of</span>
          <span>{project.team.membersNumber}</span>
          <span>members.</span>
        </div>
        {project.team.communicationLanguage && (
          <div className={styles['team-language']}>
            <span>Using {project.team.communicationLanguage} language.</span>
          </div>
        )}
      </div> */}
      <ul className="responsibilities">
        {project.responsibilities.map((resp, i) => (
          <li key={i}>{resp}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
