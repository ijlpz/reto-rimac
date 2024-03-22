import React, { FC, ReactNode } from 'react';

export interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export const Header: FC<CardHeaderProps> = ({ children, className = '' }) => {
  return <div className={`${className} border-b border-blue-200`}>{children}</div>;
};
