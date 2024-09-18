import { FC } from 'react';
import { Certificates, Diplomas } from './data';
import './Education.css';

const Education: FC = () => {
  return (
    <div className="education">
      <div className="diplomas">
        {Diplomas.map((diploma, i) => (
          <div className="diploma" key={i}>
            <span className="qualification">{diploma.qualification}</span>
            <span> in </span>
            <span className="subject">{diploma.subject}</span>
            <span>{diploma.completionYear}</span>
            <div className="insitution">
              <span className="short-name">
                {diploma.institution.shortName}
              </span>
              <span className="full-name">{diploma.institution.fullName}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="certificates">
        {Certificates.map((certificate, i) => (
          <div className="certificate" key={i}>
            <div className="title">{certificate.title}</div>
            <div>
              <span>Issued on:</span>
              <span className="date">
                {certificate.issuedOn.toDateString()}
              </span>
              <span> by </span>
              <span className="issuer">{certificate.issuer}</span>
              {certificate.link && <a href={certificate.link}>Attachment</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
