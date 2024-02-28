import React, {
  MouseEvent,
  FunctionComponent,
  FormEvent,
  ReactNode,
} from 'react';

export interface ButtonProps {
  name?: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onSubmit?: (event: FormEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

const variantBackground = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
};

export const Button: FunctionComponent<ButtonProps> = ({
  name,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className,
  onClick,
  onSubmit,
  children,
}) => {
  return (
    <button
      type={type}
      name={name}
      disabled={disabled}
      className={`
        relative px-10 py-4
        rounded-full
        text-white
        font-bold
        ${variantBackground[variant]}
        ${className || ''}
      `}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      <span className={`flex items-center justify-center pointer-events-none`}>
        {children}
      </span>
    </button>
  );
};
