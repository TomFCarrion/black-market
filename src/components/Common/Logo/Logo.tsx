import React from 'react';
import LogoImg from '../../../assets/Logo.png';

import './Logo.css';
export interface LogoProps {
  size?: 'm' | 'l' | 'xl';
  customClass?: string;
}

const Logo = ({ size = 'l', customClass }: LogoProps) => {
  const classname = customClass ? `logo-${size} ${customClass}` : `logo-${size}`;
  return <img className={classname} src={LogoImg} alt="Black Market Logo" />;
};

export default Logo;
