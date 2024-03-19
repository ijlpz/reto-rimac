import React, { FC } from 'react';
import { SelectCard } from './SelectCard';

const SelectCardTypes = {
  FOR_ME: 1,
  FOR_OTHER: 2,
};

interface PropsChooseCard {
  setSelectedCard: (value: number) => void;
  selectedCard: number;
}

export const ChooseCard: FC<PropsChooseCard> = ({
  setSelectedCard,
  selectedCard,
}) => {
  return (
    <div className="flex flex-col sm:flex-row px-4 sm:px-0 sm:gap-8 pt-8">
      <SelectCard
        className="flex-1"
        onClick={() => setSelectedCard(SelectCardTypes.FOR_ME)}
        selected={selectedCard === SelectCardTypes.FOR_ME}
        icon="/images/for-me-icon.svg"
        title="Para mí"
        text="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
      />
      <SelectCard
        className="flex-1"
        onClick={() => setSelectedCard(SelectCardTypes.FOR_OTHER)}
        selected={selectedCard === SelectCardTypes.FOR_OTHER}
        icon="/images/for-other-icon.svg"
        title="Para alguien más"
        text="Realiza una cotización para uno de tus familiares o cualquier persona."
      />
    </div>
  );
};
