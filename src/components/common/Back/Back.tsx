import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Icon } from '../Icon/Icon';

interface BackProps {
  route: string;
  className?: string;
}

export const Back: FC<BackProps> = ({ route, className = '' }) => {
  const { push: NavigateTo } = useRouter();
  return (
    <div className={`${className} max-w-[960px] m-auto px-4`}>
      <div className='flex items-center'>
        <span className="mr-2 w-5 h-5 border-2 border-[#4F4FFF] rounded-full flex items-center justify-center">
          <Icon name="BackIcon" size={10} />
        </span>
        <span className="cursor-pointer" onClick={() => NavigateTo(`${route}`)}>
          Volver
        </span>
      </div>
    </div>
  );
};
