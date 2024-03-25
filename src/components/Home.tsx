import { apiService } from '@/services';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Button } from './common/Button/Button';
import { Checkbox } from './common/Checkbox/Checkbox';
import { Input } from './common/Input/Input';
import { Select } from './common/Select/Select';
import Image from 'next/image';
import Tag from './common/Tag/Tag';
import Header from './layout/Header/Header';
import BackgroundHome from './BackgroundHome';
import Footer from './layout/Footer/Footer';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from '@/common/forms/register';
import { getFeedbackError, keepNumbersOnly } from '@/common/forms/utils';
import { getUserInfo, removeUserInfo, setUserInfo } from '@/utils/storage';
import { useRouter } from 'next/router';

const OPTIONS = [
  { value: 'dni', label: 'DNI' },
  { value: 'ruc', label: 'RUC' },
  { value: 'passport', label: 'Pasaporte' },
];

export const Home = () => {
  const { push: NavigateTo } = useRouter();

  const initialUserInfo = getUserInfo();

  const {
    data: userData,
    refetch,
    isFetching,
  } = useQuery(['user'], () => apiService.getUser(), {
    enabled: false,
    retry: false,
    cacheTime: 0,
  });

  const formik = useFormik<typeof initialValues>({
    initialValues,
    validationSchema,
    onSubmit: () => refetch(),
  });

  const { handleSubmit, values, setFieldValue } = formik;

  useEffect(() => {
    if (userData && values.documentNumber) {
      setUserInfo(
        JSON.stringify({
          ...userData,
          documentType: values.documentType,
          documentNumber: values.documentNumber,
          phone: values.phone,
        }),
      );
      NavigateTo('/planes');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [NavigateTo, userData]);

  useEffect(() => {
    if (initialUserInfo) {
      removeUserInfo();
    }
  }, [initialUserInfo]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative p-0 m-0 ">
        <BackgroundHome />
        <Header />
        <div className="max-w-[73em] mx-auto px-6 pt-0 md:pt-9 pb-16 relative z-20">
          <div className="flex flex-col lg:flex-row lg:space-x-6 h-full">
            <div className="w-full lg:w-1/2 h-full hidden lg:flex">
              <div className="w-full h-full relative m-auto">
                <Image
                  src="/images/home-family.png"
                  priority
                  alt="Family Rimac"
                  className="w-full max-w-[480px] h-auto"
                  width={480}
                  height={560}
                />
              </div>
            </div>
            <div className="max-w-[350px] md:max-w-[400px] m-auto px-0 md:px-6 lg:w-1/2 mt-6 lg:mt-0">
              <div className="flex flex-row items-center justify-between">
                <div className="mr-2">
                  <Tag
                    text="Seguro Salud Flexible"
                    className="font-bold text-sm py-0 !px-1 lg:px-2 -tracking-tighter lg:text-sm"
                  />
                  <h1 className="text-[1.7em] leading-7 lg:text-[2.05em] mt-4 font-bold tracking-normal text-left md:leading-10">
                    Creado para ti y tu familia
                  </h1>
                </div>
                <div className="w-[136px] lg:hidden">
                  <Image
                    src="/images/home-family.png"
                    priority
                    alt="Family Rimac"
                    width={136}
                    height={160}
                    className="max-w-none"
                  />
                </div>
              </div>
              <h4 className="font-bold mt-1 text-[15px]">
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </h4>
              <div className="mt-5 flex justify-between">
                <Select
                  selectStyle={{
                    borderTopRightRadius: '0',
                    borderBottomRightRadius: '0',
                    borderRight: '0',
                  }}
                  options={OPTIONS}
                  {...formik.getFieldProps('documentType')}
                  {...getFeedbackError(formik, 'documentType')}
                />
                <Input
                  className=""
                  label="Nro. de documento"
                  inputStyle={{
                    borderTopLeftRadius: '0',
                    borderBottomLeftRadius: '0',
                  }}
                  {...formik.getFieldProps('documentNumber')}
                  {...getFeedbackError(formik, 'documentNumber')}
                />
              </div>
              <div className="mt-4">
                <Input
                  label="Celular"
                  {...formik.getFieldProps('phone')}
                  {...getFeedbackError(formik, 'phone')}
                  onChange={(e) =>
                    formik.setFieldValue(
                      'phone',
                      keepNumbersOnly(e.target.value, 9),
                    )
                  }
                  type="tel"
                />
              </div>
              <div className="mt-6">
                <Checkbox
                  {...formik.getFieldProps('privacyPolicies')}
                  {...getFeedbackError(formik, 'privacyPolicies')}
                  checked={values.privacyPolicies === true}
                  onChange={(o) =>
                    setFieldValue(
                      'privacyPolicies',
                      o.target.checked ? true : false,
                    )
                  }
                >
                  Acepto lo Política de Privacidad{' '}
                </Checkbox>
              </div>
              <div className="mt-3">
                <Checkbox
                  {...formik.getFieldProps('commercialPolicies')}
                  {...getFeedbackError(formik, 'commercialPolicies')}
                  checked={values.commercialPolicies === true}
                  onChange={(o) =>
                    setFieldValue(
                      'commercialPolicies',
                      o.target.checked ? true : false,
                    )
                  }
                >
                  Acepto la Política Comunicaciones Comerciales
                </Checkbox>
              </div>
              <div>
                <p className="underline font-bold text-sm mt-2">
                  <a href="#"> Aplican términos y condiciones</a>
                </p>
              </div>

              <Button
                className="text-[20px] mt-6 w-full lg:w-[190px]"
                variant="secondary"
                disabled={isFetching}
                type="submit"
              >
                {isFetching ? 'Cargando' : 'Cotiza aquí'}
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </form>
  );
};
