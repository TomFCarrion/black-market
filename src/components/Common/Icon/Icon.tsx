import React from 'react';
import './Icon.css';

import { getSvgs } from './iconHelpers';

const iconsCollection = getSvgs();

type avaliableIcons = typeof iconsCollection.avaliableIcons[number];

export interface IconProps {
  name?: avaliableIcons;
  size?: '16' | '24' | '32' | '40';
}

const Icon = ({ size = '24', name = 'error' }: IconProps) => {
  // @ts-ignore  //TODO: Add needed login to remove typescript errors
  return <img src={iconsCollection.svgs[name]} width={size} height={size} alt={`${name} Icon`} />;
};

Icon.defaultProps = {
  size: '24',
  name: 'error',
};

export default Icon;
