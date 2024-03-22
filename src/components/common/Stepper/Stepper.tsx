import React, { FunctionComponent, ReactNode } from 'react';

import { StepperStepProps, Step } from './Step/Step';

export interface StepperProps {
  children: ReactNode;
  className?: string;
}

const RawStepper: FunctionComponent<StepperProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`${className} flex flex-row justify-center m-auto py-4 bg-transparent sm:bg-[#EDEFFC] border-b border-solid border-[#EDEFFC]`}>
      {children}
    </div>
  );
};

type RawStepperComponents = FunctionComponent<StepperProps> & {
  Step: FunctionComponent<StepperStepProps>;
};

export const Stepper = RawStepper as RawStepperComponents;
Stepper.Step = Step;
