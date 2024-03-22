import React, { useEffect, useMemo, useRef, useState } from 'react';
import Header from './layout/Header/Header';
import { getUserInfo } from '@/utils/storage';
import { IUser } from '@/utils/interfaces';
import { ChooseCard } from './plans/ChooseCard';

import dayjs from 'dayjs';
import { ChoosePlans } from './plans/ChoosePlans';

const calcUserAge = (birthDay: string) => {
  const birthDate = dayjs(birthDay);
  const age = dayjs().diff(birthDate, 'year');
  return age;
};

export const Plans = () => {
  const initialUserInfo = getUserInfo() || '{}';
  const [userInfo, setUserInfo] = useState<string>(initialUserInfo);

  const [selectedCard, setSelectedCard] = useState(0);

  const choosePlansRef = useRef<HTMLDivElement>(null);

  const userInfoObject: IUser = useMemo(() => {
    return userInfo ? JSON.parse(userInfo) : {};
  }, [userInfo]);

  const ageUser = useMemo(
    () => calcUserAge(userInfoObject.birthDay),
    [userInfoObject.birthDay],
  );

  useEffect(() => {
    if (initialUserInfo) {
      setUserInfo(initialUserInfo);
    }
  }, [initialUserInfo]);

  useEffect(() => {
    if (selectedCard && choosePlansRef.current) {
      choosePlansRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCard]);
  
  return (
    <div className="relative p-0 m-0 min-h-screen">
      <Header />
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
      {selectedCard && (
        <div ref={choosePlansRef}>
          <ChoosePlans ageUser={ageUser} selectedCard={selectedCard} user={userInfoObject}/>
        </div>
      )}
    </div>
  );
};
