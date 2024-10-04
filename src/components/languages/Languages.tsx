import { FC } from 'react';
import Divider from '../shared/divider/Divider';
import { LanguagesData } from './data';
import './Languages.css';

const Languages: FC = () => {
  return (
    <div className="languages-container">
      <h3 className="title">Languages</h3>
      <Divider />
      {/* TODO: create SectionTitle component? */}
      <div className="languages-list">
        {Object.entries(LanguagesData).map(([title, level]) => (
          <div className="language" key={title}>
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
    </div>
  );
};

export default Languages;
