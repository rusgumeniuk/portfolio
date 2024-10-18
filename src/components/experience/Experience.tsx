import { FC } from 'react';
import Project from '../project/Project';
import Divider from '../shared/divider/Divider';
import Period from '../shared/period/Period';
import { sortByDateDesc } from '../shared/utils/dateUtils';
import { Jobs as JobsData } from './data';
import './Experience.css';

const Experience: FC = () => {
  return (
    <div className="experience">
      <h3 className="title">Experience</h3>
      <Divider />
      {JobsData.sort((x, y) =>
        sortByDateDesc(x.company.startedOn, y.company.startedOn),
      ).map((job, jobIndex) => (
        <div className="job" key={jobIndex}>
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
            <div className="additional-responsibilities-container">
              <span className="title">Additional responsibilities:</span>
              <ul className="additional-responsibilities">
                {job.additionalResponsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="projects-container">
            {/* TODO: extract project-list component */}
            {job.projects
              .sort((x, y) => sortByDateDesc(x.startedOn, y.startedOn))
              .map((project, projectIndex) => (
                <Project key={projectIndex} project={project} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
