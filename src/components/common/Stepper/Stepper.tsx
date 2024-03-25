import React, { FC, ReactNode } from 'react';

import { StepperStepProps, Step } from './Step/Step';

export interface StepperProps {
  children: ReactNode;
  className?: string;
}

const RawStepper: FC<StepperProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`${className} flex flex-row justify-center m-auto py-4`}>
      {children}
    </div>
  );
};

type RawStepperComponents = FC<StepperProps> & {
  Step: FC<StepperStepProps>;
};

export const Stepper = RawStepper as RawStepperComponents;
Stepper.Step = Step;
