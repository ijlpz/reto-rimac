import { FormikState } from 'formik';

interface FeedbackValues {
  feedback: string;
  error: boolean;
}

export function getFeedbackError<T>(
  formik: FormikState<T>,
  key: keyof T,
): FeedbackValues {
  const feedback =
    ((formik.touched[key] && formik.errors[key]) as string) || '';

  return {
    feedback,
    error: feedback ? true : false,
  };
}

export function keepNumbersOnly(value = '', length: number) {
  return value.substring(0, length).replace(/[^0-9]/g, '');
}
