import { CSSProperties } from 'react';

export interface IUser {
  name: string;
  lastName: string;
  birthDay: string;
}

export interface IList {
  list: IPlan[];
}

export interface IPlan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export interface IRegister {
  documentType: string;
  documentNumber: string;
  phone: string;
  privacyPolicies: boolean;
  commercialPolicies: boolean;
}

export interface IconProps {
  size?: number;
  className?: string;
  style?: CSSProperties;
}
