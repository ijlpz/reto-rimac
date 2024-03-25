import React, { FC } from 'react';
import { LinearProgress } from '../Progress/LinearProgress/LinearProgress';

interface StepperMobileProps {
  totalSteps: number;
  currentStep: number;
  showProgress?: boolean;
  className?: string;
}

export const StepperMobile: FC<StepperMobileProps> = ({
  totalSteps,
  currentStep,
  showProgress,
  className = '',
}) => {
  return (
    <div className="w-full m-auto py-4 max-w-sm">
      <div className={`flex items-center ${className}`}>
        <div className="">{`PASO ${currentStep} DE ${totalSteps}`}</div>
        {showProgress && (
          <div className="ml-2 flex-grow">
            <LinearProgress
              color="#4F4FFF"
              percentage={(currentStep * 100) / totalSteps}
            />
          </div>
        )}
      </div>
    </div>
  );
};
