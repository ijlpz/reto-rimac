import React, { FC, ReactNode } from 'react';
import { CardHeaderProps, Header } from './Header/Header';
import { CardContentProps, Content } from './Content/Content';
import { Action, CardActionProps } from './Action/Action';

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export const RawCard: FC<CardProps> = ({ children, className = ',' }) => {
  return (
    <div
      className={`${className} relative p-6 shadow-lg rounded-xl`}
      style={{ boxShadow: '0px 1px 32px 0px rgba(174, 172, 243, 0.35)' }}
    >
      {children}
    </div>
  );
};

type RawCardComponents = FC<CardProps> & {
  Header: FC<CardHeaderProps>;
  Content: FC<CardContentProps>;
  Action: FC<CardActionProps>;
};

export const Card = RawCard as RawCardComponents;
Card.Header = Header;
Card.Content = Content;
Card.Action = Action;
