import * as Yup from 'yup';

export const stringRequired = Yup.string().required('Este campo es requerido.');
export const booleanTrueRequired = Yup.boolean().oneOf([true]);
