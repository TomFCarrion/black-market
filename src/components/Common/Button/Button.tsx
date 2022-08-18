import React from 'react';
import Icon from '../Icon';
import { getSvgs } from '../Icon/iconHelpers';
import './Button.css';

const iconsCollection = getSvgs();
type avaliableIcons = typeof iconsCollection.avaliableIcons[number];

export interface ButtonProps {
  title?: string;
  onClick: () => any;
  disabled?: boolean;
  variant?: 'primary' | 'outline';
  iconName?: avaliableIcons;
}

const Button = ({ title = '', onClick, disabled = false, variant = 'primary', iconName }: ButtonProps) => {
  return (
    <button className={`button ${variant} ${iconName && 'icon'}`} disabled={disabled} onClick={onClick} type="submit">
      <span className="button-arrangement">
        {title}
        {iconName && <Icon name={iconName} />}
      </span>
    </button>
  );
};
export default Button;
