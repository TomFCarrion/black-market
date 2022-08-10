import React from 'react';
import './Icon.css';

import { getSvgs } from './iconHelpers';

const iconsCollection = getSvgs();
export interface IconProps {
  name?: 'error' | 'visibility-off' | 'visibility-on'; //TODO: Destructure iconsCollection to support all available Icons, currently only supporting icons needed for log in
  size?: '16' | '24' | '32' | '40';
}

const Icon = ({ size, name }: IconProps) => {
  // @ts-ignore  //TODO: Add needed login to remove typescript errors
  return <img src={iconsCollection[name]} width={size} height={size} alt={`${name} Icon`} />;
};

Icon.defaultProps = {
  size: '24',
  name: 'error',
};

export default Icon;
