import React, { FC, ReactNode } from 'react';

export interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const Content: FC<CardContentProps> = ({ children, className = '' }) => {
  return <div className={`${className}`}>{children}</div>;
};
