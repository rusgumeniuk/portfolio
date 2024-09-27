import { FC } from 'react';
import './Bubble.css';

interface BubbleProperties {
  value: string;
}

const Bubble: FC<BubbleProperties> = ({ value }) => {
  return <div className="bubble">{value}</div>;
};

export default Bubble;
