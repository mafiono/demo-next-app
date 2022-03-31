/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import isMobile from 'is-mobile'
import React, { useEffect, useState } from 'react'
import Device from '../../partials/MobileDetection'

interface PropsBand {
  className?: string
}
const BrandLogo = (props: PropsBand) => {
  return (
    <img
      className={props.className || 'h-[40.43px] w-[133.7px]'}
      src='assets/icons/brand-logo.svg'
    />
  )
}
const HeaderComponent = (props: any) => {
  return (
    <header className='sticky top-0 bg-primary z-50'>
      <div className='container mx-auto'>
        <div className='hidden md:flex justify-between items-center h-[64px]'>
          <BrandLogo />
          <div className='flex gap-[24px] justify-end items-center'>
            <a
              href='/dsjhds'
              className='text-white text-[12px] hover:underline'
            >
              Forgot Your Password ?
            </a>
            <div className='bg-white rounded-[8px] h-[40px] w-[214px] gap-2 overflow-hidden items-center px-[8px] py-[10px] hidden lg:flex'>
              <img
                className='h-[20px] w-[20px]'
                src='assets/icons/user-icon.svg'
              />
              <input
                placeholder='Enter Your Username'
                name='email'
                className='outline-none h-full p-0 m-0 w-full text-[12px]'
              />
            </div>
            <div className='bg-white rounded-[8px] h-[40px] w-[214px] gap-2 overflow-hidden items-center px-[8px] py-[10px] hidden lg:flex'>
              <img
                className='h-[20px] w-[20px]'
                src='assets/icons/key-icon.svg'
              />
              <input
                placeholder='Enter Your Password'
                type='password'
                name='password'
                className='outline-none h-full p-0 m-0 w-full text-[12px]'
              />
              <img
                className='h-[20px] w-[20px]'
                src='assets/icons/eye-icon.svg'
              />
            </div>
            <a href='/test' className='btn --md --accent w-[99px]'>
              <span>Log In</span>
            </a>
            <a href='/test' className='btn --md --danger w-[99px]'>
              <span>Sign Up</span>
            </a>
          </div>
        </div>
        <div className='grid md:hidden grid-cols-3 h-[64px] px-[12px]'>
          <div className='flex justify-start items-center'>
            <button className='h-[36.67px] w-[36.67px] rounded-[5px] bg-[#5605A0] items-center justify-center flex'>
              <img
                className='h-[20px] w-[20px]'
                src='assets/icons/icon-menu.svg'
              />
            </button>
          </div>
          <div className='flex items-center justify-center'>
            <BrandLogo className='w-[133.69px] h-[40.43px]' />
          </div>
          <div className='flex justify-end items-center gap-[6.33px]'>
            <button className='h-[36.67px] w-[36.67px] rounded-[5px] bg-[#5605A0] items-center justify-center flex'>
              <img
                className='h-[20px] w-[20px]'
                src='assets/icons/login-icon.svg'
              />
            </button>
            <button className='h-[36.67px] w-[36.67px] rounded-[5px] bg-[#FF3076] items-center justify-center flex'>
              <img
                className='h-[20px] w-[20px]'
                src='assets/icons/add-user-icon.svg'
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
