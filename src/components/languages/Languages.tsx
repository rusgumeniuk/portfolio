import { FC } from 'react';
import { LanguagesData } from './data';
import './Languages.css';

const Languages: FC = () => {
  return (
    <div className="languages">
      <h3>Languages</h3>
      {Object.entries(LanguagesData).map(([title, level]) => (
        <div className="language">
          <span className="language-title">
            <strong>{title}</strong>
          </span>
          <span>-</span>
          <span className="language-level">
            <strong>{level}</strong>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Languages;
