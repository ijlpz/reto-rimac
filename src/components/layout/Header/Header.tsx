import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <nav className="container px-6 py-3 mx-auto flex justify-between items-center z-30 relative">
      <div className="">
        <Image
          src="/images/logo-rimac.svg"
          alt="Rimac"
          width={73}
          height={26}
        />
      </div>

      <div className="flex justify-end items-center">
        <div className='mr-4 hidden lg:flex'>
          <p className="text-sm font-semibold">¡Compra por este medio!</p>
        </div>

        <div className="flex justify-end">
          <Image
            src="/images/telephone.svg"
            alt="telephone"
            width={20}
            height={20}
          />

          <p className='font-black text-lg'>(01) 411 6001</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
