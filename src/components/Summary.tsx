import React, { useEffect, useMemo } from 'react';
import Header from './layout/Header/Header';
import { Card } from './common/Card/Card';
import { Icon } from './common/Icon/Icon';
import { getUserInfo } from '@/utils/storage';
import { ISummary } from '@/utils/interfaces';
import { Back } from './common/Back/Back';
import { StepperRimac } from './StepperRimac';
import { useRouter } from 'next/router';

export const Summary = () => {
  const summaryData = getUserInfo();
  const { push: NavigateTo } = useRouter();
  const summaryDataObject: ISummary = useMemo(() => {
    return summaryData ? JSON.parse(summaryData) : {};
  }, [summaryData]);

  useEffect(() => {
    if (!summaryDataObject.price) {
      NavigateTo('/planes');
    }
  }, [NavigateTo, summaryDataObject.price]);

  return (
    <>
      <Header />

      <div className="w-full bg-transparent sm:bg-[#EDEFFC] border-b border-solid border-[#EDEFFC] flex items-center px-4">
        <div className="sm:hidden">
          <Back route="/planes" className="text-[#4F4FFF] font-bold" />
        </div>
        <StepperRimac
          stepActive={2}
          stepsText={['Planes y coberturas', 'Resumen']}
        />
      </div>

      <div className="hidden sm:block">
        <Back route="/planes" className="text-[#4F4FFF] font-bold pt-10 px-4">
          Volver
        </Back>
      </div>

      <div className="max-w-[960px] m-auto px-4 pt-10">
        <h1 className="font-bold text-3xl sm:text-4xl text-[#141938]">
          Resumen del seguro
        </h1>
        <Card className="mt-12 mb-12">
          <Card.Header className="pb-4">
            <h2 className="text-xs font-bold">PRECIOS CALCULADOS PARA:</h2>
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
            <p
              suppressHydrationWarning
            >{`Celular: ${summaryDataObject.phone}`}</p>

            <p className="font-bold mt-4">Plan elegido</p>
            <p suppressHydrationWarning>{summaryDataObject.planName || ''}</p>
            <p suppressHydrationWarning>{`Costo del Plan: $${
              summaryDataObject.price || ''
            } al mes`}</p>
          </Card.Content>
        </Card>
      </div>
    </>
  );
};
