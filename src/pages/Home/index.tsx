import BackgroundHome from '@/components/BackgroundHome';
import Header from '@/components/layout/Header/Header';
import { Button } from '@/components/common/Button/Button';
import { Checkbox } from '@/components/common/Checkbox/Checkbox';
import { Input } from '@/components/common/Input/Input';
import { Select } from '@/components/common/Select/Select';
import Tag from '@/components/common/Tag/Tag';
import Image from 'next/image';
import React from 'react';
import Footer from '@/components/layout/Footer/Footer';

const Home = () => {
  const OPTIONS = [
    { value: 'dni', label: 'DNI' },
    { value: 'ce', label: 'CE' },
    { value: 'passport', label: 'Pasaporte' },
  ];
  return (
    <>
      <div className="relative p-0 m-0 ">
        <BackgroundHome />
        <Header />
        <div className="container mx-auto px-6 pt-4 pb-16 relative z-20">
          <div className="flex flex-col lg:flex-row lg:space-x-6 h-full">
            <div className="w-full lg:w-1/2 h-full hidden lg:flex">
              <div className="w-full h-full relative m-auto">
                <Image
                  src="/images/home-family.png"
                  alt="Family Rimac"
                  className="w-full max-w-[480px]"
                  layout="fixed"
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
                    className="font-bold text-base"
                  />
                  <h1 className="text-[32px] lg:text-[36px] mt-4 font-bold tracking-normal text-left leading-10">
                    Creado para ti y tu familia
                  </h1>
                </div>
                <div className="w-[136px] lg:hidden">
                  <Image
                    src="/images/home-family.png"
                    alt="Family Rimac"
                    width={136}
                    height={160}
                    layout="fixed"
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
                  }}
                  options={OPTIONS}
                />
                <Input
                  className=""
                  label="Nro. de documento"
                  inputStyle={{
                    borderTopLeftRadius: '0',
                    borderBottomLeftRadius: '0',
                  }}
                />
              </div>
              <div className="mt-4">
                <Input label="Celular" />
              </div>
              <div className="mt-4">
                <Checkbox text="Acepto lo Política de Privacidad" />
              </div>
              <div className="mt-1">
                <Checkbox text="Acepto la Política Comunicaciones Comerciales" />
              </div>
              <div>
                <p className="underline font-bold text-sm mt-2">
                  <a href="#"> Aplican términos y condiciones</a>
                </p>
              </div>

              <Button
                className="text-[20px] mt-6 w-full lg:w-[190px]"
                variant="secondary"
              >
                Cotiza aquí
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      
    </>
  );
};

export default Home;
