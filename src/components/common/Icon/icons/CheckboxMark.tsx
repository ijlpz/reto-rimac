import { IconProps } from '@/utils/interfaces';
import React, { FC } from 'react';

const CheckboxMarkIcon: FC<IconProps> = ({
  className,
  size = 24,
  style = {},
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      style={style}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1811 5.11293C15.5605 5.434 15.6078 6.00188 15.2868 6.38133L8.68676 14.1813C8.52129 14.3769 8.28033 14.4927 8.02427 14.4996C7.7682 14.5066 7.52129 14.4042 7.3454 14.2179L3.9454 10.6179C3.60411 10.2566 3.62038 9.68696 3.98175 9.34567C4.34311 9.00438 4.91273 9.02066 5.25402 9.38202L7.96287 12.2502L13.9127 5.21863C14.2337 4.83919 14.8016 4.79187 15.1811 5.11293Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="white"
      />
    </svg>
  );
};

export default CheckboxMarkIcon;
