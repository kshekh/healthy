import Image from 'next/image';
import { useState } from 'react';
import { Menu } from '@/components';
import { navLinks } from '@/constants';
import Link from 'next/link';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className='w-full bg-dark-500 shadow'>
      <div className='justify-between px-10 mx-auto md:items-center md:flex md:px-40'>
        <div>
          <div className='flex items-center justify-between md:block'>
            <h2 className='text-2xl font-bold'>
              <Link href='/'>
                <Image src='/icons/logo.svg' height={64} width={144} alt="Website's logo" />
              </Link>
            </h2>
            <div className='md:hidden'>
              <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className='py-2'>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}>
            <ul className='items-center justify-center space-y-8 md:flex md:space-x-[16px] md:space-y-0'>
              <Menu items={navLinks}>
                <Image src='/icons/icon_menu.svg' width={32} height={32} alt='Icon Menu' />
              </Menu>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}