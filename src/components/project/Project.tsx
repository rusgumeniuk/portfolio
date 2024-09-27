import { FC } from 'react';
import { JobProject } from '../../models/job';
import Bubble from '../shared/bubble/Bubble';
import Period from '../shared/period/Period';
import './Project.css';

interface ProjectProperties {
  project: JobProject;
}

const Project: FC<ProjectProperties> = ({ project }) => {
  return (
    <div className="project">
      <div className="project-head">
        <div className="project-title">
          <strong>Project "{project.title}"</strong>
        </div>
        <div className="project-period">
          <Period
            startedDate={project.startedOn}
            endedDate={project.endedOn}
            localization="en"
          />
        </div>
      </div>
      <ul className="project-technologies">
        {project.technologies.map((tech, i) => (
          <li className="technology" key={i}>
            <Bubble value={tech} />
          </li>
        ))}
      </ul>
      <ul className="responsibilities">
        {project.responsibilities.map((resp, i) => (
          <li className="text" key={i}>
            {resp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
