import React, { ChangeEvent } from 'react';
import './input.css';
import Icon from '../Icon';

export interface InputProps {
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
  isRequired?: boolean;
  disabled?: boolean;
}

const Input = ({
  name,
  value,
  onChange,
  label,
  placeholder,
  error,
  type = 'text',
  isRequired = false,
  disabled = false,
}: InputProps) => {
  return (
    <div className={'input-container'}>
      <div className="label-container">
        {label && (
          <label htmlFor={name} className={'input-label'}>
            {label} {isRequired && '*'}
          </label>
        )}
      </div>

      <div>
        <input
          className={error ? 'input input-error' : 'input'}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
        />
        {error && (
          <div className="input-error-label">
            <Icon /> {error}
          </div>
        )}
        {/*TODO: add X Icon */}
      </div>
    </div>
  );
};

export default Input;
