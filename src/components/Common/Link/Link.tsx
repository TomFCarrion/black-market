import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Link.css';
export interface LinkProps {
  text: string;
  redirectTo: string;
  disabled?: boolean;
}

const Link = ({ redirectTo = '/login', text = 'Default', disabled = false }: LinkProps) => {
  return (
    <RouterLink to={disabled ? '' : redirectTo} className={disabled ? 'primary-link disabled-link' : 'primary-link'}>
      {text}
    </RouterLink>
  );
};

export default Link;
