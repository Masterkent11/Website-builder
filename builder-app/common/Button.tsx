// src/common/Button.tsx
import { ButtonProps } from "@/types/common/ButtonTypes";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type = "button",
  disabled = false,
  "data-testid": testId,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${className}`}
      type={type}
      disabled={disabled}
      data-testid={testId}
    >
      {children}
    </button>
  );
};

export default Button;
