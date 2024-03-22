import React, { FC, ReactNode } from 'react';

export interface CardActionProps {
  children: ReactNode;
  className?: string;
}

export const Action: FC<CardActionProps> = ({ children, className = '' }) => {
  return <div className={`${className}`}>{children}</div>;
};
