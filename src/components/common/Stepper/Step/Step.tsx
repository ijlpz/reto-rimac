import React, { FunctionComponent, ReactNode } from 'react';

export interface StepperStepProps {
  number: number;
  isActive?: boolean;
  isCompleted?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Step: FunctionComponent<StepperStepProps> = ({
  children,
  number,
  className = '',
  onClick,
  isActive = false,
  isCompleted = false,
}) => {
  return (
    <div className={`${className}`}>
      <span className="flex cursor-default" onClick={onClick}>
        <span
          className={`w-6 h-6 ${
            isActive
              ? 'bg-[#4F4FFF] text-white'
              : 'text-[#7981B2] border border-[#7981B2]'
          }   rounded-full flex items-center justify-center`}
        >
          {number}
        </span>
        <span
          className={`ml-2 mr-4 ${
            isActive ? 'text-secondary font-bold ' : 'text-[#7981B2]'
          }`}
        >
          {children}
        </span>
        {!isCompleted && <span className="text-[#4F4FFF] font-bold mr-4">----</span>}
      </span>
    </div>
  );
};
