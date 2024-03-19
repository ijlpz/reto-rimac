import Image from 'next/image';
import React from 'react';

const BackgroundHome = () => {
  return (
    <div>
      <Image
        src="/images/blur-purple.svg"
        alt=" BlurPurple"
        priority
        className="fixed bottom-0 left-0 hidden md:flex z-0"
        width={0}
        height={0}
        style={{ width: 'auto', height: 'auto' }}
      />
      <Image
        src="/images/blur-green.svg"
        alt=" BlurGreen"
        className="fixed bottom-0 right-0 hidden md:flex"
        width={0}
        height={0}
        style={{ width: 'auto', height: 'auto' }}
      />
      <Image
        src="/images/blur-purple-small.svg"
        alt=" BlurPurple"
        className="fixed bottom-0 left-0 flex md:hidden"
        width={0}
        height={0}
        style={{ width: 'auto', height: 'auto' }}
      />
      <Image
        src="/images/blur-green-small.svg"
        alt=" BlurGreen"
        className="fixed top-0 right-0 flex md:hidden w-auto h-auto"
        priority
        width={0}
        height={0}
        style={{ width: 'auto', height: 'auto' }}
      />
    </div>
  );
};

export default BackgroundHome;
