import { IconProps } from '@/utils/interfaces';
import React, { FC } from 'react';

const BackIcon: FC<IconProps> = ({ className, size = 24, style = {} }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      style={style}
      viewBox="0 0 5 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.553173 3.99995L3.80942 0.746826L4.69067 1.62808L2.32192 3.99995L4.69067 6.37183L3.80942 7.25308L0.553173 3.99995Z" fill="#4F4FFF"/>
    </svg>
  );
};

export default BackIcon;
