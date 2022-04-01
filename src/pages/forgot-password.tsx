/* eslint-disable @next/next/no-img-element */

import Router from 'next/router'
import React from 'react'
import TextInput from '../partials/input/TextInput'

const ForgotPassword = () => {
  return (
    <div className='h-screen bg-red w-full bg-[#0C0E14]'>
      <div className='bg-[url(/assets/bg/bg-silinder.svg)] w-full h-full bg-no-repeat bg-center bg-cover'>
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
        <div className='flex-1 h-full flex items-center justify-center'>
          <div className='bg-white w-[311px] md:w-[386px] lg:w-[552px] min-h-[372px] p-[1rem] rounded-[8px] flex items-center justify-center gap-[0.5rem] flex-col'>
            <img
              alt='pass-image'
              src='/assets/icons/pass-image.svg'
              className='w-[102.48px] lg:w-[124px]'
            />
            <p className='title-page'>Forget Your Password ?</p>
            <p className='text-[10px] md:text-[11px] lg:text-[14px] text-center'>
              It seems that you forget your account username / password.Enter
              your personal info below and we’ll send you a link to get back at
              your account
            </p>
            <TextInput
              error
              classNameContainer='w-full border w-[231px] md:w-[341px] lg:w-[454px]'
              placeholder='Enter Your Username / Email / Phone Number '
              icon='/assets/icons/user-icon.svg'
              type='text'
              errorMessage='error message'
              classNameError='text-slate-600'
            />
            <button className='btn --lg --primary w-[251px]'>
              <span>Reset Password </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
