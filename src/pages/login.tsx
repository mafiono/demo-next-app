/* eslint-disable @next/next/no-img-element */
import { Modal } from '@mui/material'
import Router from 'next/router'
import React, { useState } from 'react'
import axiosClient from '../config/client'
import BaseInputText from '../partials/input/BaseInputText'
import { LOGIN_ENUM } from '../config/enum'
import { LOGIN_DTO } from '../config/types/dto'
import Link from 'next/link'

const LoginPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [formData, setFormData] = useState<LOGIN_DTO>()
  const handleChangeForm = (e: any) => {
    const { value, name } = e.target
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handlePostData = () => {
    axiosClient
      .post('/login', formData)
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className='h-screen'>
      <div className='p-[0.5rem] box-border absolute top-0 left-0 right-0 z-50'>
        <button
          className='flex items-center gap-[1rem]'
          onClick={() => Router.push('/')}
        >
          <img
            src='/assets/icons/back-arrow.svg'
            className='h-[28px] md:h-[40px] aspect-square'
            alt='back-arrow'
          />
          <p className='label-card font-semibold text-white'>Back</p>
        </button>
      </div>
      <main className=' h-full grid grid-cols-6 box-border relative pt-[60px] md:pt-0'>
        <div className=' col-span-full md:col-span-4 flex flex-1 items-center justify-center gap-[1rem] flex-col relative '>
          <div className='absolute top-[85px] left-[46px]'>
            <img
              src='/assets/bg/bg-triangle.svg'
              className='h-[113.5px] w-[141.5px]'
              alt='triangle-bg'
            />
          </div>
          <div className='bg-[#C4C4C40D] opacity-[0.5] h-[274px] w-[274px] rounded-full absolute bottom-[155px] right-[48px]' />
          <div className='bg-[#C4C4C40D] opacity-[0.5] h-[159px] w-[159px] rounded-full absolute bottom-[58px] right-[-96px] hidden md:block' />
          <div>
            <img
              alt='brand'
              src='/assets/icons/brand-logo.svg'
              className='w-[197px] h-[60px] mb-[55px]'
            />
          </div>
          <div className='mb-[55px]'>
            <p className='title-page text-white'>Log In to Your Account</p>
          </div>
          <div className='w-full p-[1rem] md:p-0 md:w-[310px] lg:w-[455px] z-[999]'>
            <BaseInputText
              id='loginId-input'
              type='text'
              placeholder='Enter Your Username or Phone Number'
              leftIcon='/assets/icons/user-icon.svg'
              rightIconType='button'
              error
              errorMessage='Reprehenderit est esse et magna officia.'
              name={LOGIN_ENUM.LOGIN_ID}
              onChange={handleChangeForm}
            />
            <BaseInputText
              id='password-input'
              placeholder='Enter Your Username or Phone Number'
              leftIcon='/assets/icons/key-icon.svg'
              rightIcon='/assets/icons/eye-icon.svg'
              rightIconType='button'
              error={false}
              errorMessage='Reprehenderit est esse et magna officia.'
              type='password'
              name={LOGIN_ENUM.PASSWORD}
              onChange={handleChangeForm}
            />
            <button
              onClick={handlePostData}
              className='btn --lg --primary w-full'
            >
              Log In
            </button>
          </div>
          <div>
            <button className='text-white py-[0.5rem] h-[37px] md:h-[51px] lg:h-[61px] w-[312px] md:w-[310px] lg:w-[455px] text-left flex items-center justify-between'>
              <span className='text-left'>Forget Username or Password ? </span>
              <img
                alt='arrow'
                src='/assets/icons/arrow.svg'
                className='h-[20px] w-[20px] rotate-[90deg]'
              />
            </button>
            <div className='divider -white w-[312px] md:w-[310px] lg:w-[455px]' />
            <button className='text-white py-[0.5rem] h-[37px] md:h-[51px] lg:h-[61px] w-[312px] md:w-[310px] lg:w-[455px] text-left flex items-center justify-between'>
              <span className='text-left'>
                Don`t Have an Account ?
                <Link href='/register' passHref>
                  <span className='text-primary underline'>Register Now !</span>
                </Link>
              </span>
              <img
                alt='arrow'
                src='/assets/icons/arrow.svg'
                className='h-[20px] w-[20px] rotate-[90deg]'
              />
            </button>
          </div>
        </div>
        <div className=' bg-blue-400 w-full col-span-2 relative hidden md:grid'>
          <div className=' h-full w-full bg-no-repeat bg-cover bg-center bg-[url(https://cdn.sanity.io/images/cf1fg779/ibl_stage/533217c58aab6ec9583f99eeed5a0e53a6ab0b56-346x640.jpg)]'>
            <div className='h-full w-full flex text-center justify-center items-center flex-col'>
              <p className='title-page text-white'>Welcome Back !</p>
              <p className='label-card text-white'>
                To keep connected with us please login with your personal info
              </p>
            </div>
          </div>
        </div>
      </main>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className='w-full h-full flex items-center justify-center'>
          <div className='bg-white w-[314px] md:w-[374.06px] lg:w-[552px] min-h-[361.86px] rounded-[8px] relative p-[22px]'>
            <button
              onClick={() => setOpenModal(false)}
              className='absolute top-[-21px] md:top-[-24px] lg:top-[-40px] right-[-20px] z-20'
            >
              <img
                alt='close-btn'
                src='/assets/icons/close-primary.svg'
                className='w-[42px] md:w-[59.29px] lg:h-[87.5px] aspect-square'
              />
            </button>
            <div className='items-center justify-center flex'>
              <img
                alt='jackpot'
                src='/assets/modal/jacpot-img-modal.svg'
                className='w-[270px] md:w-[208px] lg:w-[360px] aspect-square'
              />
            </div>
            <div className='text-center flex items-center justify-center mb-[1rem]'>
              <div className=''>
                <p className='title-page text-primary font-bold'>
                  Welcome Back!!
                </p>
                <p className='text-[10px] md:text-[12px] lg:text-[14pxr] text-[#909195]'>
                  Check out our latest game and countless promo available.Get
                  the extra bonus and ready to win big.
                </p>
              </div>
            </div>
            <a
              onClick={() => Router.push('/')}
              className='btn --lg --primary w-full'
            >
              Play Now
            </a>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default LoginPage
