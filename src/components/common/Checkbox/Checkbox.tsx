import Image from 'next/image';
import { FC, useState } from 'react';

interface Props {
  text?: string;
  isActive?: boolean;
  type?: 'rounded' | 'square';
  size?: 'sm' | 'normal';
  activeColor?: 'black' | 'green';
}

export const Checkbox: FC<Props> = ({
  text,
  activeColor = 'black',
  size = 'normal',
  type = 'square',
}) => {
  const [isChecked, setIsChecked] = useState(true);
  const bgColor = activeColor === 'black' ? 'bg-black' : 'bg-green-500';
  const borderColor = isChecked ? 'border-white' : 'border-gray-300';
  const borderRadius = type === 'square' ? 'rounded' : 'rounded-full';
  const checkmarkSize = size === 'sm' ? 'w-8 h-8' : 'w-6 h-6';
  const textSize = size === 'normal' ? 'text-sm' : 'text-lg';
  const sourceImage =
    size === 'normal' ? '/images/gl-sm-check.svg' : '/images/gl_check.svg';

  return (
    <label
      className={`flex items-center cursor-pointer ${textSize}`}
      onClick={() => setIsChecked(!isChecked)}
    >
      <div
        className={`flex justify-center items-center p-1 border ${checkmarkSize} ${borderColor} ${bgColor} ${borderRadius}`}
      >
        {isChecked && (
          <Image
            src={sourceImage}
            alt="Check"
            // className={`block ${checkmarkSize}`}
            width={20}
            height={20}
          />
        )}
      </div>
      <span className="ml-2">{text}</span>
    </label>
  );
};
