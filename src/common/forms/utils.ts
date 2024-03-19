import { FormikState } from 'formik';

interface FeedbackValues {
  feedback: string;
  name?: string;
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
    name: key as string,
  };
}
