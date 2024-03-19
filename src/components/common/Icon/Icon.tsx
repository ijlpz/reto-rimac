import React, { FC } from 'react';

import * as allIcons from './icons/index';
import { IconProps as DynamicIconProps } from '@/utils/interfaces';

export const IconNames = [
  'CheckboxMarkIcon',
] as const;

export type IconName = (typeof IconNames)[number];

export interface IconProps extends DynamicIconProps {
  name: IconName;
}

export const Icon: FC<IconProps> = ({
  name,
  size = 24,
  className,
  style = {},
}) => {
  const DynamicIcon = (
    allIcons as { [key: string]: FC<DynamicIconProps> }
  )[name];

  return (
    <DynamicIcon size={size} className={className} style={style}></DynamicIcon>
  );
};
