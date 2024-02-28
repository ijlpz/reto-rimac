import React, { FC } from 'react';

interface TagProps {
  text: string;
  className?: string;
}

const Tag: FC<TagProps> = ({ text = '', className = '' }) => {
  return (
    <div
      className={`inline-block bg-gradient-to-br from-[#00f4e2] to-[#00ff7f] rounded-[4px] px-3 ${className}`}
    >
      {text}
    </div>
  );
};

export default Tag;
