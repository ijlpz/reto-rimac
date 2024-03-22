import { Plans } from '@/components/Plans';
import useRedirect from '@/hooks/useRedirect';
import React from 'react';

const Planes = () => {
  useRedirect();
  return <Plans />;
};

export default Planes;
