import React from 'react';
import './Button.css';
export interface ButtonProps {
  title: string;
  onClick: () => any;
  disabled?: boolean;
  variant?: 1 | 2;
}

const Button = ({ title, onClick, disabled = true, variant = 1 }: ButtonProps) => {
  return (
    <button className={`button-${variant}`} disabled={disabled} onClick={onClick} type="submit">
      {title}
    </button>
  );
};

export default Button;
