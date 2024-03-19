import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary z-30 relative">
      <div className="container mx-auto flex flex-col lg:flex-row  justify-between items-center px-6 py-3">
        <div className="">
          <Image
            src="/images/logo-rimac-white.svg"
            alt="Logo Rimac"
            width={73}
            height={26}
            className="w-auto h-auto"
          />
        </div>

        <div className="mt-4 lg:mt-0">
          <p className="text-white text-sm">
            © 2023 RIMAC Seguros y Reaseguros.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
