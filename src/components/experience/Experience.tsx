import { FC } from 'react';
import Project from '../project/Project';
import Divider from '../shared/divider/Divider';
import Period from '../shared/period/Period';
import { Jobs as JobsData } from './data';
import './Experience.css';

const Experience: FC = () => {
  return (
    <div className="experience">
      <h3 className="title">Experience</h3>
      <Divider />
      {JobsData.map((job, i) => (
        <div className="job" key={i}>
          <div className="job-head">
            <div className="job-period">
              <Period
                startedDate={job.company.startedOn}
                endedDate={job.company.endedOn}
                localization="en"
              />
            </div>
            <div className="job-position title">
              <span className="job-title">
                <strong>{job.position}</strong>
              </span>
              <span>&nbsp;at&nbsp;</span>
              <span className="company-title">
                <strong>{job.company.title}</strong>
              </span>
            </div>
          </div>
          {job.additionalResponsibilities.length > 0 && (
            // TODO: make this section collapsible when press on job-head
            <div className="additional-responsibilities-container">
              <span className="title">Additional responsibilities:</span>
              <ul className="additional-responsibilities">
                {job.additionalResponsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="projects-container">
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
