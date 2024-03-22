import React, { useEffect, useMemo, useRef, useState } from 'react';
import Header from './layout/Header/Header';
import { getUserInfo } from '@/utils/storage';
import { IUser } from '@/utils/interfaces';
import { ChooseCard } from './plans/ChooseCard';

import dayjs from 'dayjs';
import { ChoosePlans } from './plans/ChoosePlans';
import { Stepper } from './common/Stepper/Stepper';
import { Back } from './common/Back/Back';

const calcUserAge = (birthDay: string) => {
  const birthDate = new Date(birthDay);
  const today = new Date();
  const age = Math.floor(
    (today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25),
  );
  return age;
};

export const Plans = () => {
  const initialUserInfo = getUserInfo() || '{}';
  // const [userInfo, setUserInfo] = useState<string>(initialUserInfo);
  const [userInfoObject, setUserInfoObject] = useState<IUser>({} as IUser);
  const [ageUser, setAgeUser] = useState(0);
  const [selectedCard, setSelectedCard] = useState(0);
  const choosePlansRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Object.keys(userInfoObject).length !== 0) {
      setAgeUser(calcUserAge(userInfoObject.birthDay));
    }
  }, [userInfoObject]);

  useEffect(() => {
    if (initialUserInfo !== '{}') {
      const info = JSON.parse(initialUserInfo);
      // setAgeUser(calcUserAge(info.birthDay));
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
      <Stepper>
        <Stepper.Step number={1} isActive>
          Planes y coberturas
        </Stepper.Step>
        <Stepper.Step number={2} isCompleted>
          Resumen
        </Stepper.Step>
      </Stepper>
      <Back route="/" className="text-[#4F4FFF] font-bold pt-10 pb-10" />
      <div className="max-w-xl m-auto">
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
      <p className="text-center text-2xl font-bold">PRUEBA 9</p>
      <p className="text-center text-2xl font-bold">{selectedCard}</p>
      <p className="text-center text-2xl font-bold">{'Age:' + ageUser}</p>
      <p className="text-center text-2xl font-bold">
        {'userInfoObject' + JSON.stringify(userInfoObject)}
      </p>
      {/* <p className="text-center text-2xl font-bold">{'userInfo' + userInfo}</p> */}
      {!!selectedCard && (
        <div ref={choosePlansRef}>
          <ChoosePlans
            ageUser={ageUser}
            selectedCard={selectedCard}
            user={userInfoObject}
          />
        </div>
      )}
      <p className="text-center text-2xl font-bold">
        {selectedCard + ' PRUEBA 5 iOS'}
      </p>
    </div>
  );
};
