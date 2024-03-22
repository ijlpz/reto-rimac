import React, { useEffect, useMemo } from 'react';
import Header from './layout/Header/Header';
import { Card } from './common/Card/Card';
import { Icon } from './common/Icon/Icon';
import { getUserInfo } from '@/utils/storage';
import { ISummary } from '@/utils/interfaces';
import { Stepper } from './common/Stepper/Stepper';
import { Back } from './common/Back/Back';

export const Summary = () => {
  const summaryData = getUserInfo();
  const summaryDataObject: ISummary = useMemo(() => {
    return summaryData ? JSON.parse(summaryData) : {};
  }, [summaryData]);

  return (
    <>
      <Header />

      <Stepper>
        <Stepper.Step number={1}>Planes y coberturas</Stepper.Step>
        <Stepper.Step number={2} isActive isCompleted>
          Resumen
        </Stepper.Step>
      </Stepper>

      <Back route="/planes" className='text-[#4F4FFF] font-bold pt-10 pb-10' />

      <div className="max-w-[960px] m-auto px-4">
        <h1 className="font-bold text-4xl">Resumen del seguro</h1>
        <Card className="mt-12 mb-12">
          <Card.Header className="pb-4">
            <h2>PRECIOS CALCULADOS PARA:</h2>
            <div className="flex flex-row items-center justify-items-center">
              <Icon name="UsersIcon" className="mr-2" size={24} />
              <p suppressHydrationWarning className="text-xl font-bold">
                {summaryDataObject.name + ' ' + summaryDataObject.lastName}
              </p>
            </div>
          </Card.Header>
          <Card.Content>
            <p className="font-bold mt-4">Responsable de pago</p>
            <p
              suppressHydrationWarning
            >{`DNI: ${summaryDataObject.documentNumber}`}</p>
            <p suppressHydrationWarning>Celular: 5130216147</p>

            <p className="font-bold mt-4">Plan elegido</p>
            <p suppressHydrationWarning>{summaryDataObject.planName}</p>
            <p
              suppressHydrationWarning
            >{`Costo del Plan: $${summaryDataObject.price} al mes`}</p>
          </Card.Content>
        </Card>
      </div>
    </>
  );
};
