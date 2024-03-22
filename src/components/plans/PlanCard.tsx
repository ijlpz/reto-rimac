import React, { FC } from 'react';
import { Card } from '../common/Card/Card';
import { Button } from '../common/Button/Button';
import Tag from '../common/Tag/Tag';
import Image from 'next/image';
import { IUser } from '@/utils/interfaces';
import { setUserInfo } from '@/utils/storage';
import { useRouter } from 'next/router';

interface PropsPlanCard {
  name: string;
  price: number;
  description: string[];
  recommended?: boolean;
  discountRate?: number;
  user?: IUser;
}

const hasClinicaWord = (name: string): boolean => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .includes('clinica');
};

export const PlanCard: FC<PropsPlanCard> = ({
  name = '',
  price = 0,
  description = [''],
  recommended = false,
  discountRate = 0,
  user,
}) => {
  const { push: NavigateTo } = useRouter();

  const salePrice = !!discountRate
    ? price - (price * discountRate) / 100
    : price;
  return (
    <Card className="my-10 max-w-72 pt-10 px-8 pb-12">
      <Card.Header className="pb-6">
        <>
          <div
            className={`${
              hasClinicaWord(name) || recommended ? 'show' : 'hidden'
            }`}
          >
            <Tag text="Plan recomendado" className="font-medium text-sm" />
          </div>
          <div className="flex items-center justify-between gap-4 mb-2 tracking-[-0.04em]">
            <h2 className="text-2xl mt-1 font-bold">{name}</h2>
            <Image
              src={`/images/icon-${
                hasClinicaWord(name) ? 'health' : 'home'
              }-plans.svg`}
              width={56}
              height={56}
              alt="Home Plan"
            />
          </div>
          <div className="mt-6">
            <p className="font-bold text-xs tracking-wider text-[#7981B2]">
              COSTO DEL PLAN
            </p>
            <p
              className={`${
                !!discountRate
                  ? 'text-[#7981B2] line-through text-sm'
                  : 'font-bold text-xl tracking-tighter'
              } `}
            >{`$${price} ${!!discountRate ? 'antes' : 'al mes'}`}</p>
            {!!discountRate && (
              <p
                className={`font-bold text-[1.4em] tracking-tighter mt-2`}
              >{`$${salePrice} al mes`}</p>
            )}
          </div>
        </>
      </Card.Header>
      <Card.Content className="pb-20">
        {description.map((item: string, index: number) => (
          <li className="pt-6 list-inside flex items-start" key={index}>
            <span className="text-3xl leading-6 mr-2">&#8226;</span>
            <div className="text-lg leading-7 tracking-tighter">{item}</div>
          </li>
        ))}
      </Card.Content>
      <Card.Action className="absolute bottom-10 left-0 w-full px-8">
        <Button
          className="w-full mt-10"
          onClick={() => {
            setUserInfo(
              JSON.stringify({ ...user, planName: name, price: salePrice }),
            );
            NavigateTo('/resumen');
          }}
        >
          Seleccionar Plan
        </Button>
      </Card.Action>
    </Card>
  );
};
