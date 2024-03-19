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
import { getFeedbackError } from '@/common/forms/utils';
import { setUserInfo } from '@/utils/storage';
import { useRouter } from 'next/router';

const OPTIONS = [
  { value: 'dni', label: 'DNI' },
  { value: 'ce', label: 'CE' },
  { value: 'passport', label: 'Pasaporte' },
];

export const Home = () => {
  const { push: NavigateTo } = useRouter();
  const { data: userData, refetch } = useQuery(
    ['user'],
    () => apiService.getUser(),
    {
      enabled: false,
      retry: false,
    },
  );

  const formik = useFormik<typeof initialValues>({
    initialValues,
    validationSchema,
    onSubmit: () => refetch(),
  });

  const { handleSubmit, values, setFieldValue } = formik;

  useEffect(() => {
    if (userData) {
      setUserInfo(JSON.stringify(userData));
      NavigateTo('/planes');
    }
  }, [NavigateTo, userData]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative p-0 m-0 ">
        <BackgroundHome />
        <Header />
        <div className="container mx-auto px-6 pt-4 pb-16 relative z-20">
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
            <div className="max-w-[350px] m-auto lg:w-1/2 mt-6 lg:mt-0">
              <div className="flex flex-row items-center justify-between">
                <div className="mr-2">
                  <Tag
                    text="Seguro Salud Flexible"
                    className="font-bold text-sm py-1 lg:py-0 lg:text-base"
                  />
                  <h1 className="text-[32px] lg:text-[36px] mt-4 font-bold tracking-normal text-left leading-10">
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
              <h4 className="font-bold mt-4 text-[15px]">
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </h4>
              <div className="mt-4 flex justify-between">
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
                />
              </div>
              <div className="mt-4">
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
              <div className="mt-1">
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
                type="submit"
              >
                Cotiza aquí
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </form>
  );
};
