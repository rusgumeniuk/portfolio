import { FC } from 'react';
import Divider from '../shared/divider/Divider';
import { AboutMe } from './data';
import './Summary.css';

const Summary: FC = () => {
  return (
    <div className="summary">
      <h3 className="title">Summary</h3>
      {/* TODO: use h2, but add styles */}
      <Divider />
      <p className="summary-text">{AboutMe}</p>
    </div>
  );
};

export default Summary;
