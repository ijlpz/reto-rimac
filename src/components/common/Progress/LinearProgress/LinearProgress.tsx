import React, { FC } from 'react';

interface LinearProgressProps {
  className?: string;
  percentage: number;
  color?: string;
}
export const LinearProgress: FC<LinearProgressProps> = ({
  percentage = 50,
  className = '',
  color,
}) => {
  return (
    <div className="max-w-full mx-auto">
      <div className={`bg-gray-200 h-2 rounded-full ${className}`}>
        <div
          className="bg-blue-500 h-full rounded-full"
          style={{
            width: `${percentage}%`,
            ...(color && { backgroundColor: color }),
          }}
        ></div>
      </div>
    </div>
  );
};
