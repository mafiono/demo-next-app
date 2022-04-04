/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import isMobile from 'is-mobile'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/auth'
import Device from '../../partials/MobileDetection'
import Skeleton from '@mui/material/Skeleton'
import { Box } from '@mui/system'
import cookie from 'js-cookie'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { SESSIONS_NAME } from '../../config/enum'
interface PropsBand {
  className?: string
}
const BrandLogo = (props: PropsBand) => {
  return (
    <Link href='/'>
      <a>
        <img
          alt='brand'
          className={props.className || 'h-[40.43px] w-[133.7px]'}
          src='assets/icons/brand-logo.svg'
        />
      </a>
    </Link>
  )
}
const HeaderComponent = (props: any) => {
  const { user } = useAuth() as any
  const { t: translate } = useTranslation(['title', 'button'])

  const authToken = cookie.get(SESSIONS_NAME.JWT_TOKEN)

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
                      alt='wallet-icon'
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
                      alt='inbox-icon'
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
                      alt='login-icon'
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
                      alt='logout-icon'
                      className='h-[20px] w-[20px]'
                      src='assets/icons/logout-icon.svg'
                    />
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className='flex gap-[24px] justify-end items-center'>
              <Link passHref href='/forgot-password'>
                <span className='text-white text-[12px] hover:underline'>
                  {translate('title:FORGOT_PASSWORD')}
                </span>
              </Link>
              <div className='bg-white rounded-[8px] h-[40px] w-[214px] gap-2 overflow-hidden items-center px-[8px] py-[10px] hidden lg:flex'>
                <img
                  alt='user-icon'
                  className='h-[20px] w-[20px]'
                  src='assets/icons/user-icon.svg'
                />
                <input
                  placeholder={translate('title:ENTER_USERNAME')}
                  name='email'
                  className='outline-none h-full p-0 m-0 w-full text-[12px]'
                />
              </div>
              <div className='bg-white rounded-[8px] h-[40px] w-[214px] gap-2 overflow-hidden items-center px-[8px] py-[10px] hidden lg:flex'>
                <img
                  alt='key-icon'
                  className='h-[20px] w-[20px]'
                  src='assets/icons/key-icon.svg'
                />
                <input
                  placeholder={translate('title:ENTER_PASSWORD')}
                  type='password'
                  name='password'
                  className='outline-none h-full p-0 m-0 w-full text-[12px]'
                />
                <img
                  alt='eye-icon'
                  className='h-[20px] w-[20px]'
                  src='assets/icons/eye-icon.svg'
                />
              </div>
              <Link href='/' passHref>
                <a className='btn --md --accent w-[99px] capitalize'>
                  {translate('button:LOGIN')}
                </a>
              </Link>
              <Link href='/register' passHref>
                <a className='btn --md --danger w-[99px] capitalize'>
                  {translate('button:SIGN_UP')}
                </a>
              </Link>
            </div>
          )}
        </div>
        {/* // phone */}
        <div className='grid md:hidden grid-cols-3 h-[64px] px-[12px]'>
          <div className='flex justify-start items-center'>
            <button className='h-[36.67px] w-[36.67px] rounded-[5px] bg-[#5605A0] items-center justify-center flex'>
              <img
                alt='menu-icon'
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
                    alt='wallet-icon'
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
                    alt='login-icon'
                    className='h-[20px] w-[20px]'
                    src='assets/icons/login-icon-v2.svg'
                  />
                </a>
              </li>
            </ul>
          ) : (
            <div className='flex justify-end items-center gap-[6.33px]'>
              <Link href='/login' passHref>
                <button className='h-[36.67px] w-[36.67px] rounded-[5px] bg-[#5605A0] items-center justify-center flex'>
                  <img
                    alt='login-icon'
                    className='h-[20px] w-[20px]'
                    src='assets/icons/login-icon.svg'
                  />
                </button>
              </Link>
              <Link href='/register' passHref>
                <button className='h-[36.67px] w-[36.67px] rounded-[5px] bg-[#FF3076] items-center justify-center flex'>
                  <img
                    alt='add-icon'
                    className='h-[20px] w-[20px]'
                    src='assets/icons/add-user-icon.svg'
                  />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
