/* eslint-disable @next/next/no-img-element */
import Router from 'next/router'
import React from 'react'
import TextInput from '../partials/input/TextInput'

const LoginPage = () => {
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
        <div className=' col-span-full md:col-span-4 flex flex-1 items-center justify-center gap-[1rem] flex-col relative'>
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
          <TextInput
            classNameContainer='w-[312px] md:w-[310px] lg:w-[455px]'
            placeholder='Enter Your Username or Phone Number'
            icon='/assets/icons/user-icon.svg'
            type='text'
            error={false}
            errorMessage='error message'
          />
          <TextInput
            classNameContainer='w-[312px] md:w-[310px] lg:w-[455px]'
            placeholder='Enter Your Username or Phone Number'
            icon='/assets/icons/key-icon.svg'
            leftIcon='/assets/icons/eye-icon.svg'
            type='password'
            error
          />
          <button className='btn --lg --primary w-[312px] md:w-[310px] lg:w-[455px]'>
            <span>Log In</span>
          </button>

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
                <a href='/register'>
                  <span className='text-primary underline'>Register Now !</span>
                </a>
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
    </div>
  )
}

export default LoginPage
