import { FC } from 'react';
import { Certificates, Diplomas } from './data';
import './Education.css';

const Education: FC = () => {
  const formatDate = (date: Date): string =>
    date.toLocaleString('default', { dateStyle: 'short' });

  return (
    <div className="education">
      <h3>Education</h3>
      <div className="diplomas">
        {Diplomas.map((diploma, i) => (
          <div className="diploma" key={i}>
            <div className="diploma-head">
              <span className="qualification">
                <strong>{diploma.qualification}</strong>
              </span>
              <span>in</span>
              <span className="subject">
                <strong>{diploma.subject}</strong>
              </span>
            </div>
            <div className="insitution">
              <span className="short-name">
                {diploma.institution.shortName}
              </span>
              <span className="full-name">
                ({diploma.institution.fullName})
              </span>
              <span>{diploma.completionYear}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="certificates">
        {Certificates.map((certificate, i) => (
          <div className="certificate" key={i}>
            <div className="certificate-title">
              <a href={certificate.link}>
                <h4>{certificate.title}</h4>
              </a>
            </div>
            <div className="certificate-issuer">
              <span>Issued on:</span>
              <span className="date">
                <em>{formatDate(certificate.issuedOn)}</em>
              </span>
              <span className="issuer">
                <span>by</span>
                <strong>{certificate.issuer}</strong>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
