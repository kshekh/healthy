import React from 'react';

const Exercise = () => {
  return (
    <div className='bg-dark-500 overflow-y-scroll max-h-[264px] px-6 py-4 mb-14'>
      <table className='w-full border-separate border-spacing-5 border border-slate-500'>
        <thead>
          <tr>
            <th className='text-left font-inter flex'>
              <p className='font-normal text-[15px] mr-6'>
                MY
                <br />
                EXERCISE
              </p>
              <p className='font-normal text-[22px]'>2021.05.21</p>
            </th>
            <th className='px-4 py-2'></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-slate-600'>
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <ul className='text-left text-[15px] list-disc pl-4'>
                    <li>家事全般（立位・軽い）</li>
                  </ul>
                  <p className='text-right font-inter text-lg text-primary-300'>10 min</p>
                </div>
                <p className='text-left font-inter text-[15px] text-primary-300 pl-4'>26kcal</p>
              </div>
            </td>
            <td className='border border-slate-600'>
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <ul className='text-left text-[15px] list-disc pl-4'>
                    <li>家事全般（立位・軽い）</li>
                  </ul>
                  <p className='text-right font-inter text-lg text-primary-300'>10 min</p>
                </div>
                <p className='text-left font-inter text-[15px] text-primary-300 pl-4'>26kcal</p>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Exercise;
