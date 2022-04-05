/* eslint-disable @next/next/no-img-element */
import Router from 'next/router'
import React, { useState } from 'react'
import { REGISTER_ENUM } from '../config/enum/register.enum'
import BaseInputText from '../partials/input/BaseInputText'
import { REGISTER_DTO } from '../config/types/dto'
import BaseInputSelect from '../partials/input/BaseInputSelect'
import Link from 'next/link'
import BaseInputDob from '../partials/input/BaseInputDob'
import Validator from '../config/helpers/validatior'
import { keys } from '@mui/system'
import Cookies from 'js-cookie'
import { SESSIONS_NAME } from '../config/enum/sessions.enum'
const RegisterPage = () => {
  const [checkTnc, setCheckTnc] = useState(false)
  const [formData, setFormData] = useState<any>()
  const [invalidForm, setInvalidForm] = useState<any>({})
  const handleChangeForm = (e: any) => {
    const { name, value } = e?.target || {}
    if (name === REGISTER_ENUM.USERNAME) {
      const validation = new Validator().validationUsername(value)
      setInvalidForm((prev: any) => ({
        ...prev,
        [`error_${name}`]: !validation,
      }))
    } else if (name === REGISTER_ENUM.PASSWORD) {
      const validation = new Validator().validationPassword(value)
      setInvalidForm((prev: any) => ({
        ...prev,
        [`error_${name}`]: !validation,
      }))
    } else if (name === REGISTER_ENUM.CONFIRM_PASSWORD) {
      const validation = new Validator().validationConfirmPassword(
        formData[REGISTER_ENUM.PASSWORD],
        value,
      )
      setInvalidForm((prev: any) => ({
        ...prev,
        [`error_${name}`]: !validation,
      }))
    } else if (name === REGISTER_ENUM.PHONE_NUMBER) {
      const validation = new Validator().validationPhoneNumber(value)
      setInvalidForm((prev: any) => ({
        ...prev,
        [`error_${name}`]: !validation,
      }))
    } else if (name === REGISTER_ENUM.EMAIL) {
      const validation = new Validator().validationEmail(value)
      setInvalidForm((prev: any) => ({
        ...prev,
        [`error_${name}`]: !validation,
      }))
    }
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleRegisterData = async () => {
    const validate = await validateForm()
    if (validate) {
      Router.push({
        pathname: '/choose-character',
        query: { ...formData },
      })
      Cookies.set(SESSIONS_NAME.REGISTER_DATA, JSON.stringify(formData))
      Cookies.set(
        SESSIONS_NAME.CHOOSE_CHARACTER,
        JSON.stringify({ choose: true }),
      )
      localStorage.setItem(
        SESSIONS_NAME.REGISTER_DATA,
        JSON.stringify(formData),
      )
    } else {
      //
    }
  }
  const validateForm = async () => {
    const regEnum = REGISTER_ENUM as any
    const results = await Promise.all(
      Object.keys(regEnum).reduce((acc: any, key: string) => {
        const name = regEnum[key]
        const value = formData[name] || ''
        let error: any

        if (name === REGISTER_ENUM.USERNAME) {
          const validation = new Validator().validationUsername(value)
          setInvalidForm((prev: any) => ({
            ...prev,
            [`error_${name}`]: !validation,
          }))
          if (!validation) {
            error = { [`error_${name}`]: !validation }
          }
        } else if (name === REGISTER_ENUM.PASSWORD) {
          const validation = new Validator().validationPassword(value)
          setInvalidForm((prev: any) => ({
            ...prev,
            [`error_${name}`]: !validation,
          }))
          if (!validation) {
            error = { [`error_${name}`]: !validation }
          }
        } else if (name === REGISTER_ENUM.CONFIRM_PASSWORD) {
          const validation = new Validator().validationConfirmPassword(
            formData[REGISTER_ENUM.PASSWORD],
            value,
          )
          setInvalidForm((prev: any) => ({
            ...prev,
            [`error_${name}`]: !validation,
          }))
          if (!validation) {
            error = { [`error_${name}`]: !validation }
          }
        } else if (name === REGISTER_ENUM.PHONE_NUMBER) {
          const validation = new Validator().validationPhoneNumber(value)
          setInvalidForm((prev: any) => ({
            ...prev,
            [`error_${name}`]: !validation,
          }))
          if (!validation) {
            error = { [`error_${name}`]: !validation }
          }
        } else if (name === REGISTER_ENUM.EMAIL) {
          const validation = new Validator().validationEmail(value)
          setInvalidForm((prev: any) => ({
            ...prev,
            [`error_${name}`]: !validation,
          }))
          if (!validation) {
            error = { [`error_${name}`]: !validation }
          }
        }
        acc.push(error)
        return acc
      }, []),
    )
    const releaseValue = results.filter(e => e !== undefined)
    return !(releaseValue.length > 0)
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
      <main className='h-full grid grid-cols-6 box-border relative pt-[60px] md:pt-0'>
        <div className='pb-[1rem] md:pb-0 col-span-full md:col-span-4 flex flex-1 items-center justify-center gap-[1rem] flex-col relative  container mx-auto lg:px-[5rem] md:px-[3rem] px-[1rem]'>
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
              className='w-[197px] h-[60px]'
            />
          </div>
          <div className=''>
            <p className='title-page text-white'>Create Account</p>
          </div>
          <div className='grid gap-[1em] w-full '>
            <div className=' border-b-[3px] border-b-primary'>
              <p className='title-page-sm text-primary'>Account Details</p>
            </div>
            <div className='grid grid-cols-5 gap-[1em]'>
              <div className='col-span-2 items-center justify-between hidden md:flex'>
                <p className='label-card text-white'>Username</p>
                <p className='label-card text-white'>:</p>
              </div>
              <div className=' col-span-full md:col-span-3'>
                <BaseInputText
                  id={REGISTER_ENUM.USERNAME}
                  type='text'
                  placeholder='Enter Your Username or Phone Number'
                  leftIcon='/assets/icons/user-icon.svg'
                  rightIconType='button'
                  error={invalidForm[`error_${REGISTER_ENUM.USERNAME}`]}
                  errorMessage='Reprehenderit est esse et magna officia.'
                  name={REGISTER_ENUM.USERNAME}
                  onChange={handleChangeForm}
                />
              </div>
            </div>
            <div className='grid grid-cols-5 gap-[1em]'>
              <div className='col-span-2 items-center justify-between hidden md:flex'>
                <p className='label-card text-white'>Password</p>
                <p className='label-card text-white'>:</p>
              </div>
              <div className=' col-span-full md:col-span-3'>
                <BaseInputText
                  id={REGISTER_ENUM.PASSWORD}
                  type='password'
                  placeholder='Enter Your Username or Phone Number'
                  leftIcon='/assets/icons/key-icon.svg'
                  rightIcon='/assets/icons/eye-icon.svg'
                  rightIconType='button'
                  error={invalidForm[`error_${REGISTER_ENUM.PASSWORD}`]}
                  errorMessage='Reprehenderit est esse et magna officia.'
                  name={REGISTER_ENUM.PASSWORD}
                  onChange={handleChangeForm}
                />
              </div>
            </div>
            <div className='grid grid-cols-5 gap-[1em]'>
              <div className='col-span-2 items-center justify-between hidden md:flex'>
                <p className='label-card text-white'>Password Confirmation</p>
                <p className='label-card text-white'>:</p>
              </div>
              <div className='col-span-full md:col-span-3'>
                <BaseInputText
                  id={REGISTER_ENUM.CONFIRM_PASSWORD}
                  type='password'
                  placeholder='Enter Your Username or Phone Number'
                  leftIcon='/assets/icons/key-icon.svg'
                  rightIcon='/assets/icons/eye-icon.svg'
                  rightIconType='button'
                  error={invalidForm[`error_${REGISTER_ENUM.CONFIRM_PASSWORD}`]}
                  errorMessage='Reprehenderit est esse et magna officia.'
                  name={REGISTER_ENUM.CONFIRM_PASSWORD}
                  onChange={handleChangeForm}
                />
              </div>
            </div>
            <div className='grid grid-cols-5 gap-[1em]'>
              <div className='col-span-2 items-center justify-between hidden md:flex'>
                <p className='label-card text-white'>Date of Birth</p>
                <p className='label-card text-white'>:</p>
              </div>
              <div className='col-span-full md:col-span-3 grid grid-cols-3 gap-[1em]'>
                <BaseInputDob
                  name={REGISTER_ENUM.DOB}
                  onChange={handleChangeForm}
                />
              </div>
            </div>
          </div>
          <div className='grid w-full]'>
            <div className=' border-b-[3px] border-b-primary mb-[1rem] block'>
              <p className='title-page-sm text-primary'>Contact Info</p>
            </div>
            <div className='grid grid-cols-5 gap-[1em]'>
              <div className='col-span-2 items-center justify-between hidden md:flex'>
                <p className='label-card text-white'>Email</p>
                <p className='label-card text-white'>:</p>
              </div>
              <div className=' col-span-full md:col-span-3'>
                <BaseInputText
                  id={REGISTER_ENUM.EMAIL}
                  type='text'
                  placeholder='Enter Your Email'
                  leftIcon='/assets/icons/email-icon.svg'
                  rightIconType='button'
                  error={invalidForm[`error_${REGISTER_ENUM.EMAIL}`]}
                  errorMessage='Reprehenderit est esse et magna officia.'
                  name={REGISTER_ENUM.EMAIL}
                  onChange={handleChangeForm}
                />
              </div>
            </div>
            <div className='grid grid-cols-5 gap-[1em]'>
              <div className='col-span-2 items-center justify-between hidden md:flex'>
                <p className='label-card text-white'>Phone Number</p>
                <p className='label-card text-white'>:</p>
              </div>
              <div className=' col-span-full md:col-span-3'>
                <BaseInputText
                  id={REGISTER_ENUM.PHONE_NUMBER}
                  type='text'
                  placeholder='Enter Your Phone Number'
                  leftIcon='/assets/icons/phone-icon.svg'
                  rightIconType='button'
                  error={invalidForm[`error_${REGISTER_ENUM.PHONE_NUMBER}`]}
                  errorMessage='Reprehenderit est esse et magna officia.'
                  name={REGISTER_ENUM.PHONE_NUMBER}
                  onChange={handleChangeForm}
                />
              </div>
            </div>
            <div className='grid grid-cols-5 gap-[1em]'>
              <div className='col-span-2 items-center justify-between hidden md:flex'>
                <p className='label-card text-white'>Captcha</p>
                <p className='label-card text-white'>:</p>
              </div>
              <div className='col-span-full h-[40px] md:col-span-3 grid grid-cols-3 relative gap-[1rem]'>
                <BaseInputText
                  id={REGISTER_ENUM.CAPTCHA}
                  type='text'
                  placeholder='Captcha'
                  rightIconType='button'
                  error={invalidForm[`error_${REGISTER_ENUM.CAPTCHA}`]}
                  errorMessage='Reprehenderit est esse et magna officia.'
                  name={REGISTER_ENUM.CAPTCHA}
                  onChange={handleChangeForm}
                />
                <div className='rounded-[8px] overflow-hidden flex items-center h-[44px]'>
                  <img
                    className='w-full h-full object-cover'
                    alt='captch'
                    src='https://image.captchas.net/?client=demo&random=RandomZufall'
                  />
                </div>
                <div className='flex items-center justify-start'>
                  <button>
                    <img
                      alt='refresh-btn'
                      src='/assets/icons/loop-icon.svg'
                      className='w-[20px] h-[20px]'
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=' border-b-[3px] border-b-primary w-full' />
          <div className='grid grid-cols-5 gap-[1rem] pb-[5rem]'>
            <div className='col-span-full md:col-span-3 flex gap-[1rem]'>
              <input onChange={() => setCheckTnc(!checkTnc)} type='checkbox' />
              <p className='text-white text-[12px]'>
                While clicking the button SIGN UP, I declare that I m 18 years
                old or more. I ve read and agreed to all the terms and
                conditions that apply with the rulesstated in the related
                information within this platform{' '}
                <a className=' text-primary' href=''>
                  See Term & Condition
                </a>
              </p>
            </div>
            <div className='col-span-full md:col-span-2 z-50'>
              <button
                disabled={!checkTnc}
                onClick={handleRegisterData}
                className={`btn --lg --primary w-full ${
                  !checkTnc ? 'disabled' : ''
                }`}
              >
                <span>Sign Up</span>
              </button>
            </div>
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

export default RegisterPage
