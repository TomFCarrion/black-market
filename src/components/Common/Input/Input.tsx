import React, { ChangeEvent } from 'react';

export interface InputProps {
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
}

const Input = ({ name, value, onChange, label, placeholder, error, className, type = 'text' }: InputProps) => {
  return (
    <div>
      {label && <div>{label}</div>}
      <div>
        <input name={name} value={value} onChange={onChange} placeholder={placeholder} type={type} />
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};

export default Input;
