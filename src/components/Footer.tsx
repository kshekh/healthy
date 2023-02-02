import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='md:text-[11px] bottom-0 w-full bg-dark-500 md:px-40'>
        <div className='md:flex md:justify-start md:space-x-11 md:items-center md:h-32'>
          <div>
            <a href='#' className=''>
              会員登録
            </a>
          </div>
          <div>
            <a href='#' className=''>
              運営会社
            </a>
          </div>
          <div>
            <a href='#' className=''>
              利用規約
            </a>
          </div>
          <div>
            <a href='#' className=''>
              個人情報の取扱について
            </a>
          </div>
          <div>
            <a href='#' className=''>
              特定商取引法に基づく表記
            </a>
          </div>
          <div>
            <a href='#' className=''>
              お問い合わせ
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
