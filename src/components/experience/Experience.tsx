import { FC } from 'react';
import Project from '../project/Project';
import Period from '../shared/period/Period';
import { Jobs as JobsData } from './data';
import './Experience.css';

const Experience: FC = () => {
  return (
    <div className="experience">
      {JobsData.map((job, i) => (
        <div className="job" key={i}>
          <div className="job-head">
            <div className="job-position">
              <span className="job-title">
                <strong>{job.position}</strong>
              </span>
              <span>&nbsp;at&nbsp;</span>
              <span className="company-title">
                <strong>{job.company.title}</strong>
              </span>
            </div>
            <div className="job-period">
              <Period
                startedDate={job.company.startedOn}
                endedDate={job.company.endedOn}
                localization="en"
              />
            </div>
          </div>
          {job.additionalResponsibilities.length > 0 && (
            // TODO: make this section collapsible when press on job-head
            <div className="additional-responsibilities-container">
              <span>Additional responsibilities:</span>
              <ul className="additional-responsibilities">
                {job.additionalResponsibilities.map((resp, i) => (
                  <li className="text" key={i}>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="projects">
            {job.projects.map((project, i) => (
              <Project key={i} project={project} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
