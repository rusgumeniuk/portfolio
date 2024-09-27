import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import './Contacts.css';
import { ContactsData } from './data';

const Contacts: FC = () => {
  return (
    <div className="contacts">
      <div className="contact email">
        <FontAwesomeIcon icon={faEnvelope} />
        <a href={`mailto:${ContactsData.email}`} className="email">
          Email
        </a>
      </div>
      <div className="contact link">
        <FontAwesomeIcon icon={faLinkedin} />
        <a href={ContactsData.linkedIn}>LinkedIn</a>
      </div>
      <div className="contact link">
        <FontAwesomeIcon icon={faGithub} />
        <a href={ContactsData.github}>GitHub</a>
      </div>
      {ContactsData.site && (
        <div className="contact site">
          <FontAwesomeIcon icon={faGlobe} />
          <a href={ContactsData.site}>Site</a>
        </div>
      )}
    </div>
  );
};

export default Contacts;
