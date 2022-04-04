/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { Modal } from '@mui/material'
import { format } from 'date-fns'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import Router, { useRouter } from 'next/router'
import React, { useState } from 'react'
import axiosClient from '../config/client'
import { REGISTER_ENUM } from '../config/enum/register.enum'
import { baseToast } from '../partials/BaseToast'

const ChoseCharacter = props => {
  const routerData = useRouter()

  const [openModal, setOpenModal] = useState<boolean>(false)
  const handlePostRegister = () => {
    const cookiesData = Cookies.get('register-data')
    const localStorageData = localStorage.getItem('register-data')
    const localStorageDataJson = JSON.parse(localStorageData)
    const cookiesDataJson = JSON.parse(cookiesData)

    const queryData =
      localStorageDataJson || cookiesDataJson || routerData.query || ({} as any)
    const formData = {
      ...queryData,
      [REGISTER_ENUM.DOB]: format(
        new Date(queryData[REGISTER_ENUM.DOB]),
        'yyyy-MM-dd',
      ),
      [REGISTER_ENUM.FIRST_NAME]: '',
      [REGISTER_ENUM.LAST_NAME]: '',
      [REGISTER_ENUM.COUNTRY_ID]: 'ID',
      [REGISTER_ENUM.CURRENCY_ID]: 'IDR',
      [REGISTER_ENUM.JURISDICTION_ID]: 'ID',
      // [REGISTER_ENUM.PLAYER_STATUS]: 1,
      // [REGISTER_ENUM.CHARACTER_ID]: 1,
      // [REGISTER_ENUM.PLAYER_LEVEL]: 1,
      [REGISTER_ENUM.REFERRAL_ID]: '',
    }
    axiosClient
      .post('/register', formData)
      .then(res => {
        const { errorCode, message } = res.data
        if (errorCode !== 0) {
          baseToast({
            type: 'error',
            message: message,
            label: 'Register error',
          })
        }
      })
      .catch(e => {
        baseToast({
          type: 'error',
          message: e.message,
          label: 'Register error',
        })
      })
  }
  return (
    <div className='flex flex-col flex-1 h-screen gap-[1rem]'>
      <div className='p-[.5rem]'>
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
      <div>
        <h1 className='title-page text-center text-white'>Choose Character</h1>
      </div>
      <div className='h-full'>
        <div className='container mx-auto h-full p-[1rem] md:p-0'>
          <div className='grid grid-cols-2 md:grid-cols-4 h-full gap-[1rem]'>
            {Array(
              {
                img: '/assets/character/character_sports.svg',
                label: 'Sportsbook Specialist',

                features: [
                  {
                    text: 'Bonus Sportsbook Game 5%',
                  },
                  {
                    text: 'Bonus Slot Game 1%',
                  },
                  {
                    text: 'Bonus Live Kasino Game 1%',
                  },
                ],
              },
              {
                img: '/assets/character/character_slot.svg',
                label: 'Slot Specialist',
                features: [
                  {
                    text: 'Bonus Sportsbook Game 1%',
                  },
                  {
                    text: 'Bonus Slot Game 5%',
                  },
                  {
                    text: 'Bonus Live Kasino Game 1%',
                  },
                ],
              },
              {
                img: '/assets/character/character_casino.svg',
                label: 'Casino Specialist',

                features: [
                  {
                    text: 'Bonus Sportsbook Game 5%',
                  },
                  {
                    text: 'Bonus Slot Game 1%',
                  },
                  {
                    text: 'Bonus Live Kasino Game 1%',
                  },
                ],
              },
              {
                img: '/assets/character/character_allrounder.svg',
                label: 'All Rounder',

                features: [
                  {
                    text: 'Bonus Sportsbook Game 4%',
                  },
                  {
                    text: 'Bonus Slot Game 0.8%',
                  },
                  {
                    text: 'Bonus Live Kasino Game 0.8%',
                  },
                ],
              },
            ).map((e, i) => {
              return (
                <div
                  key={i.toString()}
                  className='h-full flex flex-col items-center justify-center'
                >
                  <div
                    className={`md:w-[187.06px] md:h-[362.19px] lg:h-[502.96px] lg:w-[259.76px]  hover:scale-105 cursor-pointer transition-all card character border-[4px] p-[1em] flex flex-col items-center justify-between`}
                  >
                    <img
                      className=' w-[98px] h-[129px] md:w-[146.39px] md:h-[192.48px] lg:h-[203.29px] lg:w-[203.29px] -mt-[57px]'
                      alt={e.label}
                      src={e.img}
                    />
                    <div className='flex items-center flex-col'>
                      <h2 className=' whitespace-nowrap label-card font-bold text-white text-center'>
                        {e.label}
                      </h2>
                      <ul className='list-disc marker:text-white p-[1rem]'>
                        {e.features.map((e, idx) => {
                          return (
                            <li key={idx.toString()}>
                              <p className='text-white text-[8px] md:text-[10px] lg:text-[12px]'>
                                {e.text}
                              </p>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <button
                      onClick={handlePostRegister}
                      className='choose-btn btn --md p-[0.5rem]'
                    >
                      <span>Choose Character</span>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
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
                src='/assets/modal/welcome-img.svg'
                className='w-[271.37px] md:w-[273.09px] lg:w-[403px] aspect-square'
              />
            </div>
            <div className='text-center flex items-center justify-center mb-[1rem]'>
              <div className=''>
                <p className='title-page text-primary font-bold'>
                  Welcome To Unoplay
                </p>
                <p className='text-[10px] md:text-[12px] lg:text-[14pxr] text-[#909195]'>
                  Your account has been Registered !!. Check out our awesome
                  games and become the ultimate winner to receives special
                  prize.
                </p>
              </div>
            </div>
            <a href='/' className='btn --lg --primary w-full'>
              Play Now
            </a>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ChoseCharacter
