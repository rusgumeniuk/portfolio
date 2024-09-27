import { FC } from 'react';
import { DesignerData, DeveloperData } from './data';

const Footer: FC = () => {
  return (
    <div>
      <div className="designer">
        <span>Designed by</span>
        <a href={DesignerData.Profile}>{DesignerData.Name}</a>
      </div>
      <div className="developer">
        <span>Developed by</span>
        <span>{DeveloperData.Name}</span>
        <span>in</span>
        <span>{DeveloperData.LastChangedYear}</span>
      </div>
    </div>
  );
};

export default Footer;
