import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faGlobe,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import Icon from '../shared/icon/Icon';
import './Contacts.css';
import { ContactsData } from './data';

const Contacts: FC = () => {
  return (
    <div className="contacts">
      <div className="contact email">
        <Icon
          iconTitle={faEnvelope}
          link={`mailto:${ContactsData.email}`}
          text="Email"
        />
      </div>
      <div className="contact link">
        <Icon
          iconTitle={faLinkedin}
          link={ContactsData.linkedIn}
          text="LinkedIn"
        />
      </div>
      <div className="contact link">
        <Icon iconTitle={faGithub} link={ContactsData.github} text="GitHub" />
      </div>
      {ContactsData.site && (
        <div className="contact link">
          <Icon iconTitle={faGlobe} link={ContactsData.site} text="Site" />
        </div>
      )}
      <div className="contact location">
        <Icon iconTitle={faLocationDot} text={ContactsData.location} />
      </div>
    </div>
  );
};

export default Contacts;
