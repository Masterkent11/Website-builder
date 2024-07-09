// src/common/Input.tsx
import React from "react";

interface InputProps {
  placeholder: string;
  value?: string | "";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  className?: string;
  name: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  type,
  className,
  name,
  onFocus,
  onBlur,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      name={name}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default Input;
