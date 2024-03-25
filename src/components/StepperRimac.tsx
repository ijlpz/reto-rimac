import React, { FC } from 'react';
import { Stepper } from './common/Stepper/Stepper';
import { StepperMobile } from './common/StepperMobile/StepperMobile';

interface StepperRimacProps {
  stepsText: string[];
  stepActive: number;
}
export const StepperRimac: FC<StepperRimacProps> = ({
  stepsText,
  stepActive,
}) => {
  return (
    <div className="w-full">
      <div className="hidden sm:block">
        <Stepper>
          {stepsText.map((item, index) => (
            <Stepper.Step
              key={index}
              number={index + 1}
              isActive={stepActive === index + 1}
              isCompleted={stepsText.length === index + 1}
            >
              {item}
            </Stepper.Step>
          ))}
        </Stepper>
      </div>
      <div className="show sm:hidden">
        <StepperMobile
          totalSteps={stepsText.length}
          currentStep={stepActive}
          showProgress
          className="font-bold text-sm"
        />
      </div>
    </div>
  );
};
