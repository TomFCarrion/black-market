import React from 'react';
import LogoImg from '../../../assets/Logo.png';

import './Logo.css';
export interface LogoProps {
  size?: 'm' | 'l' | 'xl';
}

const Logo = ({ size = 'l' }: LogoProps) => {
  return <img className={`logo-${size}`} src={LogoImg} />;
};

export default Logo;
