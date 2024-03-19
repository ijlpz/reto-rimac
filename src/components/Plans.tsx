import React, { useEffect, useState } from 'react';
import Header from './layout/Header/Header';
import { getUserInfo } from '@/utils/storage';
import { IUser } from '@/utils/interfaces';
import { useQuery } from 'react-query';
import { apiService } from '@/services';
import { ChooseCard } from './plans/ChooseCard';

export const Plans = () => {
  const initialUserInfo = getUserInfo() || '{}';
  const [userInfo, setUserInfo] = useState<string>(initialUserInfo);

  const [selectedCard, setSelectedCard] = useState(0)

  const { data: plans, refetch } = useQuery(
    ['plans'],
    () => apiService.getPlans(),
    {
      enabled: true,
      retry: false,
    },
  );

  useEffect(() => {
    if (initialUserInfo) {
      setUserInfo(initialUserInfo);
    }
  }, [initialUserInfo]);
  const userInfoObject: IUser = userInfo ? JSON.parse(userInfo) : {};
  return (
    <div className="relative p-0 m-0 min-h-screen">
      <Header />
      <div className="max-w-xl m-auto">
        <div className="sm:text-center px-4 sm:px-0 max-w-md m-auto">
          <h6
            className="text-2xl sm:text-[2.3em] font-bold text-gray-800"
            suppressHydrationWarning
          >{`${userInfoObject.name} ¿Para quién deseas cotizar?`}</h6>
          <p className="text-base mt-2 font-medium text-gray-700">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </div>
        <ChooseCard selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      </div>
    </div>
  );
};
