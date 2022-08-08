import React from 'react';

export interface ButtonProps {
  title: string;
  onClick: () => any;
  disabled?: boolean;
}

const Button = ({ title, onClick, disabled = true }: ButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick} type="submit">
      {title}
    </button>
  );
};

export default Button;
