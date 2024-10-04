import { FC } from 'react';
import Divider from '../shared/divider/Divider';
import { Certificates, Diplomas } from './data';
import './Education.css';

const Education: FC = () => {
  const formatDate = (date: Date): string =>
    date.toLocaleString('default', { dateStyle: 'short' });

  return (
    <div className="education-container">
      <h3 className="title">Education</h3>
      <Divider />
      <div className="diplomas">
        {Diplomas.map((diploma, i) => (
          <div className="diploma" key={i}>
            <div className="diploma-main title">
              <span className="qualification">
                <strong>{diploma.qualification}</strong>
              </span>
              <span>in</span>
              <span className="subject">
                <strong>{diploma.subject}</strong>
              </span>
            </div>
            <div className="diploma-details">
              <span className="short-name">
                {diploma.institution.shortName}
              </span>
              <div className="hint">
                <span className="full-name">
                  {diploma.institution.fullName}
                </span>
              </div>
              <span>{diploma.completionYear}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="certificates">
        {Certificates.map((certificate, i) => (
          <div className="certificate" key={i}>
            <div className="certificate-title title">
              <a href={certificate.link}>
                <h4>{certificate.title}</h4>
              </a>
            </div>
            <div className="certificate-issuer">
              <span>Issued on</span>
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
