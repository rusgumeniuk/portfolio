import { FC, useState } from 'react';
import { JobProject } from '../../models/job';
import Bubble from '../shared/bubble/Bubble';
import Period from '../shared/period/Period';
import './Project.css';

interface ProjectProperties {
  project: JobProject;
}

const Project: FC<ProjectProperties> = ({ project }) => {
  const [isTechnologiesDisplayed, setIsTechnologiesDisplayed] = useState(false);
  const [isResponsibilitiesDisplayed, setIsResponsibilitiesDisplayed] =
    useState(false);

  const changeTechnologiesSectionVisability = (): void => {
    setIsTechnologiesDisplayed(!isTechnologiesDisplayed);
  };

  const changeResponsibilitiesSectionVisability = (): void => {
    setIsResponsibilitiesDisplayed(!isResponsibilitiesDisplayed);
  };

  return (
    <div className="project">
      <div className="project-head">
        <div className="project-title">
          <strong>Project "{project.title}"</strong>
        </div>
        <button
          className={`expander ${
            isTechnologiesDisplayed ? 'enabled' : 'disabled'
          }`}
          onClick={changeTechnologiesSectionVisability}
        >
          <Bubble value="Technologies" />
        </button>
        <button
          className={`expander ${
            isResponsibilitiesDisplayed ? 'enabled' : 'disabled'
          }`}
          onClick={changeResponsibilitiesSectionVisability}
        >
          <Bubble value="Responsibilities" />
        </button>
        <div className="project-period">
          <Period
            startedDate={project.startedOn}
            endedDate={project.endedOn}
            localization="en"
          />
        </div>
      </div>
      {isTechnologiesDisplayed && (
        <ul className="project-technologies">
          {project.technologies.map((tech, i) => (
            <li className="technology" key={i}>
              <Bubble value={tech} />
            </li>
          ))}
        </ul>
      )}
      {isResponsibilitiesDisplayed && (
        <ul className="responsibilities">
          {project.responsibilities.map((resp, i) => (
            <li className="text" key={i}>
              {resp}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Project;
