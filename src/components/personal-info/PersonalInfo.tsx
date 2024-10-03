import { FC } from 'react';
import Info from './data';
import './PersonalInfo.css';

const PersonalInfo: FC = () => {
  return (
    <div className="personal-info">
      <h1 className="name">
        <span>{Info.Name.FirstName}</span> <span>{Info.Name.LastName}</span>
      </h1>
      <div className="roles">
        {Info.Roles.map((role) => (
          <div className="role" key={role}>
            {role}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
