/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import isMobile from 'is-mobile'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/auth'
import Device from '../../partials/MobileDetection'
import Skeleton from '@mui/material/Skeleton'
import { Box } from '@mui/system'
import cookie from 'js-cookie'
interface PropsBand {
  className?: string
}
const BrandLogo = (props: PropsBand) => {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a href='/'>
      <img
        className={props.className || 'h-[40.43px] w-[133.7px]'}
        src='assets/icons/brand-logo.svg'
      />
    </a>
  )
}
const HeaderComponent = (props: any) => {
  const { user } = useAuth() as any

  const authToken = cookie.get('JWT_TOKEN')

  return (
    <header className='sticky top-0 bg-primary z-50'>
      <div className='container mx-auto'>
        {/* // desktop */}
        <div className='hidden md:flex justify-between items-center h-[64px]'>
          <BrandLogo />
          {user || authToken ? (
            <div>
              <ul className='flex items-center gap-[32px] justify-end'>
                <li>
                  <a
                    className='text-white text-[16px] font-semibold border border-white rounded-full px-[1rem] py-[.5rem]'
                    href=''
                  >{`${new Intl.NumberFormat('id-ID').format(
                    39203902,
                  )} IDR`}</a>
                </li>
                <li>
                  <a
                    href=''
                    className='h-[36.67px] w-[36.67px] rounded-[5px] hover:bg-accent items-center justify-center flex'
                  >
                    <img
                      className='h-[20px] w-[20px]'
                      src='assets/icons/wallet-icon.svg'
                    />
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className='h-[36.67px] w-[36.67px] rounded-[5px] hover:bg-accent items-center justify-center flex'
                  >
                    <img
                      className='h-[20px] w-[20px]'
                      src='assets/icons/inbox-icon.svg'
                    />
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className='h-[36.67px] w-[36.67px] rounded-[5px] hover:bg-accent items-center justify-center flex'
                  >
                    <img
                      className='h-[20px] w-[20px]'
                      src='assets/icons/login-icon-v2.svg'
                    />
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className='h-[36.67px] w-[36.67px] rounded-[5px] hover:bg-accent items-center justify-center flex'
                  >
                    <img
                      className='h-[20px] w-[20px]'
                      src='assets/icons/logout-icon.svg'
                    />
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className='flex gap-[24px] justify-end items-center'>
              <a
                href='/forgot-password'
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
              <a href='' className='btn --md --accent w-[99px]'>
                <span>Log In</span>
              </a>
              <a href='/register' className='btn --md --danger w-[99px]'>
                <span>Sign Up</span>
              </a>
            </div>
          )}
        </div>
        {/* // phone */}
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
          {user || authToken ? (
            <ul className='flex items-center gap-[6.33px] justify-end'>
              <li>
                <a
                  href=''
                  className='h-[36.67px] w-[36.67px] rounded-[5px] bg-accent items-center justify-center flex'
                >
                  <img
                    className='h-[20px] w-[20px]'
                    src='assets/icons/wallet-icon.svg'
                  />
                </a>
              </li>

              <li>
                <a
                  href=''
                  className='h-[36.67px] w-[36.67px] rounded-[5px] bg-accent items-center justify-center flex'
                >
                  <img
                    className='h-[20px] w-[20px]'
                    src='assets/icons/login-icon-v2.svg'
                  />
                </a>
              </li>
            </ul>
          ) : (
            <div className='flex justify-end items-center gap-[6.33px]'>
              <a
                href='/login'
                className='h-[36.67px] w-[36.67px] rounded-[5px] bg-[#5605A0] items-center justify-center flex'
              >
                <img
                  className='h-[20px] w-[20px]'
                  src='assets/icons/login-icon.svg'
                />
              </a>
              <a
                href='/register'
                className='h-[36.67px] w-[36.67px] rounded-[5px] bg-[#FF3076] items-center justify-center flex'
              >
                <img
                  className='h-[20px] w-[20px]'
                  src='assets/icons/add-user-icon.svg'
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
