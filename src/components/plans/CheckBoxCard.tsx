import React, { FC } from 'react';
import { Checkbox } from '../common/Checkbox/Checkbox';
import Image from 'next/image';

interface PropsCheckBoxCard {
  icon: string;
  title: string;
  text: string;
  selected: boolean;
  className?: string;
  onClick: () => void;
}

export const CheckBoxCard: FC<PropsCheckBoxCard> = ({
  icon,
  title='',
  text='',
  selected,
  className = '',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${className} cursor-pointer flex flex-col p-6 mb-4 pt-4 pb-10 border-[3px] rounded-3xl  text-gray-700  ${
        selected ? 'border-secondary' : 'border-transparent shadow-xl'
      } border-solid`}
    >
      <div className="flex justify-end">
        <Checkbox
          checked={selected}
          size="sm"
          type="rounded"
          activeColor="green"
        />
      </div>
      <div className="flex items-center gap-2 font-bold mt-2 mb-1 sm:flex-col sm:items-start">
        <Image src={icon} alt="" width={48} height={48} />
        <p className="text-xl">{title}</p>
      </div>
      <p className="text-sm tracking-tight">{text}</p>
    </div>
  );
};
