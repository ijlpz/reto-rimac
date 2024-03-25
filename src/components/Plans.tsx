import React, { useEffect, useRef, useState } from 'react';
import Header from './layout/Header/Header';
import { getUserInfo } from '@/utils/storage';
import { IUser } from '@/utils/interfaces';
import { ChooseCard } from './plans/ChooseCard';

import dayjs from 'dayjs';
import { ChoosePlans } from './plans/ChoosePlans';
import { Back } from './common/Back/Back';
import { StepperRimac } from './StepperRimac';

const calcUserAge = (birthDay: string) => {
  const formattedBirthDay = birthDay.split('-').reverse().join('-');
  const birthDate = dayjs(formattedBirthDay, 'YYYY-MM-DD');
  const age = dayjs().diff(birthDate, 'year');
  return age;
};

export const Plans = () => {
  const initialUserInfo = getUserInfo() || '{}';
  const [userInfoObject, setUserInfoObject] = useState<IUser>({} as IUser);
  const [selectedCard, setSelectedCard] = useState(0);
  const choosePlansRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialUserInfo !== '{}') {
      const info = JSON.parse(initialUserInfo);
      setUserInfoObject(info);
    }
  }, [initialUserInfo]);

  useEffect(() => {
    if (selectedCard && choosePlansRef.current) {
      choosePlansRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCard]);

  return (
    <div className="relative p-0 m-0">
      <Header />
      <div className="w-full bg-transparent sm:bg-[#EDEFFC] border-b border-solid border-[#EDEFFC] flex items-center px-4">
        <div className="sm:hidden">
          <Back route="/" className="text-[#4F4FFF] font-bold" />
        </div>
        <StepperRimac
          stepActive={1}
          stepsText={['Planes y coberturas', 'Resumen']}
        />
      </div>
      <div className="hidden sm:block">
        <Back route="/" className="text-[#4F4FFF] font-bold pt-10 px-4">
          Volver
        </Back>
      </div>
      <div className="max-w-xl m-auto pt-10">
        <div className="sm:text-center px-4 sm:px-0 max-w-md m-auto">
          <h2
            className="text-2xl sm:text-[2.3em] font-bold text-gray-800"
            suppressHydrationWarning
          >{`${userInfoObject.name} ¿Para quién deseas cotizar?`}</h2>
          <p className="text-base mt-2 font-medium text-gray-700">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </div>
        <ChooseCard
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      </div>
      {!!selectedCard && (
        <div ref={choosePlansRef}>
          <ChoosePlans
            ageUser={calcUserAge(userInfoObject?.birthDay)}
            selectedCard={selectedCard}
            user={userInfoObject}
          />
        </div>
      )}
    </div>
  );
};
