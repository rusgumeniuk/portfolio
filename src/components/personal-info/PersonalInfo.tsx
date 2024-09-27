import { FC } from 'react';
import Info from './data';
import './PersonalInfo.css';

const PersonalInfo: FC = () => {
  return (
    <div className="personal-info">
      <h1 className="name">
        <span>{Info.Name.FirstName}</span> <span>{Info.Name.LastName}</span>
      </h1>
      <h4 className="role">
        <span>
          <strong>{Info.Role}</strong>
        </span>
      </h4>
      <div className="location">
        <span>Based in&nbsp;</span>
        <span>
          <strong>{Info.Location}</strong>
        </span>
      </div>
    </div>
  );
};

export default PersonalInfo;
