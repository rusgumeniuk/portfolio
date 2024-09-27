import { FC } from 'react';
import './Portrait.css';
import portrait from './portrait.jpg';

const Portrait: FC = () => {
  return (
    <div className="portrait-container">
      <img src={portrait} alt="portrait" />
    </div>
  );
};

export default Portrait;
