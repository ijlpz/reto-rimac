import * as Yup from 'yup';

import { booleanTrueRequired, phoneSchema, stringRequired } from '../schemas';
import { IRegister } from '@/utils/interfaces';

export const initialValues: IRegister = {
  documentType: 'dni',
  documentNumber: '',
  phone: '',
  privacyPolicies: false,
  commercialPolicies: false,
};

export const validationSchema = Yup.object({
  documentType: stringRequired,
  documentNumber: stringRequired,
  phone: phoneSchema,
  privacyPolicies: booleanTrueRequired,
  commercialPolicies: booleanTrueRequired,
});
