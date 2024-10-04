import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import './Icon.css';

interface IconProperties {
  iconTitle: IconProp;
  text: string;
  link?: string;
}

const Icon: FC<IconProperties> = ({ iconTitle, text, link }) => {
  return (
    <div className="icon-container">
      <FontAwesomeIcon className="icon" icon={iconTitle} />
      {link ? (
        <a href={link} className="link">
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default Icon;
