import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { DesignerData, DeveloperData } from './data';
import './Footer.css';

const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="designer">
        <span>Designed by</span>
        <span>{DesignerData.Name}</span>
        <a href={DesignerData.Profile} aria-label="Designer's profile">
          <FontAwesomeIcon icon={faLink} />
        </a>
      </div>
      <div className="developer">
        <span>Developed by</span>
        <span>{DeveloperData.Name}</span>
        <span>in</span>
        <span>{DeveloperData.LastChangedYear}</span>
      </div>
    </div>
  );
};

export default Footer;
