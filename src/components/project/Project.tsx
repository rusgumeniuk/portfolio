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
        {/* TODO: display project's domain */}
        <div className="project-title title">
          <strong>Project &quot;{project.title}&quot;</strong>
        </div>
      </div>
      <div className="project-technologies">
        <SkillList mainSkills={project.technologies} />
      </div>
      <ul className="responsibilities">
        {project.responsibilities.map((resp, i) => (
          <li key={i}>{resp}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
