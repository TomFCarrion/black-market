import React from 'react';
import './Button.css';
export interface ButtonProps {
  title: string;
  onClick: () => any;
  disabled?: boolean;
  variant?: 'primary' | 'outline';
}

const Button = ({ title, onClick, disabled = false, variant = 'primary' }: ButtonProps) => {
  return (
    <button className={` button ${variant}`} disabled={disabled} onClick={onClick} type="submit">
      {title}
    </button>
  );
};

export default Button;
