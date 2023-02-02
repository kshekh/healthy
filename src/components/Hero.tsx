import Image from 'next/image';
import React from 'react';
import Achivement from './Achivement';
import BodyGraph from './BodyGraph';

const Hero = () => {
  return (
    <>
      <section className='bg-dark-600 h-[312px]'>
        <div className='flex w-full h-full overflow-hidden'>
          <div
            className='w-2/5 bg-cover bg-center'
            style={{
              backgroundImage: `url("/images/d01.jpg")`,
            }}>
              <Achivement/>
          </div>
          <div className='w-3/5 flex justify-center items-center'>
            <BodyGraph styles={'object-contain'}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
