import React from 'react';
import { Summary } from '@/components/Summary';
import useRedirect from '@/hooks/useRedirect';

const Resumen = () => {
  useRedirect();

  return <Summary />;
};

export default Resumen;
