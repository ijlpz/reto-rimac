import React, { FC } from 'react';
import { PlanCard } from './PlanCard';
import { IPlan, IUser } from '@/utils/interfaces';
import { useQuery } from 'react-query';
import { apiService } from '@/services';
import { SelectCardTypes } from './ChooseCard';

interface ChoosePlansProps {
  ageUser: number;
  selectedCard: number;
  user?: IUser;
}

const DISCOUNT_RATE = 5;

export const ChoosePlans: FC<ChoosePlansProps> = ({
  ageUser,
  selectedCard,
  user,
}) => {
  const { data: plans } = useQuery(['plans'], () => apiService.getPlans(), {
    enabled: true,
    retry: false,
  });
  return (
    <div className="max-w-[928px] m-auto">
      <div className={`flex flex-wrap justify-center gap-8`}>
        {plans?.list
          .filter((plan: IPlan) => plan?.age <= ageUser)
          .map((plan: IPlan, index: number) => (
            <PlanCard
              key={index}
              description={plan?.description}
              name={plan?.name}
              price={plan?.price}
              discountRate={
                selectedCard === SelectCardTypes.FOR_OTHER ? DISCOUNT_RATE : 0
              }
              user={user}
            />
          ))}
      </div>
    </div>
  );
};
