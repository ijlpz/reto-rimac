import React, { useEffect, useMemo, useState } from 'react';
import Header from './layout/Header/Header';
import { Card } from './common/Card/Card';
import { Icon } from './common/Icon/Icon';
import { getUserInfo } from '@/utils/storage';
import { ISummary } from '@/utils/interfaces';
import { Back } from './common/Back/Back';
import { StepperRimac } from './StepperRimac';
import { useRouter } from 'next/router';

export const Summary = () => {
  const [summaryDataObject, setSummaryDataObject] = useState<ISummary>(
    {} as ISummary,
  );
  const { push: NavigateTo } = useRouter();

  useEffect(() => {
    const summaryData = JSON.parse(getUserInfo() as string);

    if (!summaryData.price) {
      NavigateTo('/planes');
    }
    setSummaryDataObject(summaryData);
  }, [NavigateTo]);

  return (
    <>
      <Header />

      <div className="w-full bg-transparent sm:bg-[#EDEFFC] border-b border-solid border-[#EDEFFC] flex items-center px-4">
        <div className="sm:hidden">
          <Back route="/planes" className="text-[#4F4FFF] font-bold" />
        </div>
        <StepperRimac stepActive={2} />
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
              <p className="text-xl font-bold">
                {summaryDataObject?.name + ' ' + summaryDataObject?.lastName}
              </p>
            </div>
          </Card.Header>
          <Card.Content>
            <p className="font-bold mt-4">Responsable de pago</p>
            <p>{`DNI: ${summaryDataObject?.documentNumber}`}</p>
            <p>{`Celular: ${summaryDataObject?.phone}`}</p>

            <p className="font-bold mt-4">Plan elegido</p>
            <p>{summaryDataObject?.planName || ''}</p>
            <p>{`Costo del Plan: $${summaryDataObject?.price || ''} al mes`}</p>
          </Card.Content>
        </Card>
      </div>
    </>
  );
};
