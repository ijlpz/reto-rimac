import { useRouter } from 'next/router';
import React, { FC, ReactNode } from 'react';
import { Icon } from '../Icon/Icon';

interface BackProps {
  route: string;
  className?: string;
  children?: ReactNode;
}

export const Back: FC<BackProps> = ({ route, className = '', children }) => {
  const { push: NavigateTo } = useRouter();
  return (
    <div className={`${className} max-w-[960px] m-auto`}>
      <div
        className="flex items-center w-fit cursor-pointer"
        onClick={() => NavigateTo(`${route}`)}
      >
        <span className="mr-2 w-5 h-5 border-2 border-[#4F4FFF] rounded-full flex items-center justify-center">
          <Icon name="BackIcon" size={10} />
        </span>
        {children && <span>{children}</span>}
      </div>
    </div>
  );
};
