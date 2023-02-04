import { Records, MyDiary, RecordButton } from '@/components';
import React from 'react';

const myrecord = () => {
  return (
    <div className='max-w-[960px] m-auto'>
      <Records />
      <MyDiary />
      <RecordButton />
    </div>
  );
};

export default myrecord;
