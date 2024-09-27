import { FC } from 'react';
import { AboutMe } from './data';
import './Summary.css';

const Summary: FC = () => {
  return (
    <div className="summary">
      <h4 className="title">About me</h4>
      <p>{AboutMe}</p>
    </div>
  );
};

export default Summary;
