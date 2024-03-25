import * as Yup from 'yup';

export const stringRequired = Yup.string().required('Este campo es requerido.');
export const booleanTrueRequired = Yup.boolean().oneOf([true]);

export const phoneSchema = Yup.string()
  .required('Este campo es requerido.')
  .typeError('El valor es inválido')
  .test('phone', 'Debe tener 9 dígitos.', (val) => `${val}`.length === 9);
