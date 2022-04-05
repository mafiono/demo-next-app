/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import type { NextPage } from 'next'
import React, { useState } from 'react'
import { SwipperComponent, SwipperWithButton } from '../partials/Swipper'
import { SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import axiosClient from '../config/client'
import HeaderComponent from '../components/HeaderComponent'
import MarqueeComponent from '../partials/MarqueeComponent'
import SideMenuComponent from '../components/SideMenuComponent'

const Home = (props: any) => {
  const { t: translate } = useTranslation(['title', 'button'])
  const [collapsible, setCollapsible] = useState(false)

  return (
    <div>
      <HeaderComponent />
      <div className='flex'>
        <SideMenuComponent />
        <main className='container mx-auto grid grid-cols-1 gap-[1rem] px-[1rem] md:px-0'>
          <MarqueeComponent className='mt-[1rem] w-full' icons={true}>
            Ullamco eiusmod nulla aliquip quis non amet esse. Non cillum id
          </MarqueeComponent>
          <div className='grid grid-cols-5 gap-[1rem]'>
            <div className='col-span-full md:col-[1/4] rounded-[8px] pb-[55%] h-0 overflow-hidden'>
              <SwipperComponent
                autoplay
                loop
                spaceBetween={10}
                pagination={{ clickable: true }}
                slidesPerView={1}
                allowTouchMove={false}
              >
                {Array(5)
                  .fill(0)
                  .map((e, index) => {
                    return (
                      <SwiperSlide key={index.toString()}>
                        <div className='relative overflow-hidden h-0 pb-[55%] box-border'>
                          <img
                            className='absolute bottom-0 top-0 left-0 right-0 object-cover w-full h-full'
                            alt='promos'
                            src='https://cdn.sanity.io/images/cf1fg779/unoplay/7729e57e5fa1ddc5b02c832b78a12bd542848865-1920x480.jpg?w=1600&h=416'
                            height='100'
                            width='100'
                          />
                        </div>
                      </SwiperSlide>
                    )
                  })}
              </SwipperComponent>
            </div>
            <div className=' col-span-full md:col-span-2 grid grid-cols-4 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-[1rem] row-span-1 md:row-span-2 relative h-[100%] w-[100%] overflow-hidden'>
              {(props?.listGameHot?.slice(0, 4) || []).map((e, i) => {
                return (
                  <div
                    className='h-full w-full rounded-[8px] overflow-hidden'
                    key={e?.id}
                  >
                    <img
                      alt='images-game'
                      className='h-full w-full object-cover'
                      src={`${e?.image_url}?width=200&height=188&func=bound`}
                    />
                  </div>
                )
              })}
            </div>
            <div className='grid grid-cols-3 col-span-full md:col-[1/4] gap-[1rem] p-0 box-border relative'>
              <Link href='/promotion' passHref>
                <button className='btn --danger --lg'>
                  <img
                    alt='promotions'
                    src='/assets/icons/promotion-icon.svg'
                  />
                  <span className='capitalize'>
                    {translate('button:PROMOTION')}
                  </span>
                </button>
              </Link>
              <Link href='/register' passHref>
                <button className='btn --primary --lg'>
                  <img
                    alt='registration'
                    src='/assets/icons/registration-icon.svg'
                  />
                  <span className='capitalize'>
                    {translate('button:SIGN_UP')}
                  </span>
                </button>
              </Link>
              <Link href='/login' passHref>
                <button className='btn --accent --lg'>
                  <img alt='login' src='/assets/icons/login-icon-v2.svg' />

                  <span className='capitalize'>
                    {translate('button:LOGIN')}
                  </span>
                </button>
              </Link>
            </div>
            <div className=' col-span-full'>
              <div className='divider'>
                <span className='px-[1rem] title-page text-white'>
                  {translate('RECOMMENDED_GAME')}
                </span>
              </div>
            </div>
            <div className='col-span-full'>
              <div className='card --dark flex w-full items-center px-[1rem] gap-[1rem]'>
                <SwipperWithButton
                  loop
                  spaceBetween={10}
                  slidesPerView={6}
                  breakpoints={{
                    100: {
                      slidesPerView: 3,
                    },
                    400: {
                      slidesPerView: 4,
                    },
                    769: {
                      slidesPerView: 6,
                    },
                    1140: {
                      slidesPerView: 8,
                    },
                  }}
                >
                  {[
                    {
                      label: 'pragmatic',
                      img: '/assets/provider/Pragmatic.svg',
                    },
                    {
                      label: 'pgsoft',
                      img: '/assets/provider/PG Soft.svg',
                    },
                    {
                      label: 'bahanero',
                      img: '/assets/provider/Habanero.svg',
                    },
                    {
                      label: 'spinomenal',
                      img: '/assets/provider/Spinomenal.svg',
                    },
                    {
                      label: 'yggdrasil',
                      img: '/assets/provider/Yggdrasil.svg',
                    },
                    {
                      label: 'microgaming',
                      img: '/assets/provider/Microgaming.svg',
                    },
                    {
                      label: 'iconic gaming',
                      img: '/assets/provider/Iconic Gaming.svg',
                    },
                    {
                      label: 'play n go',
                      img: '/assets/provider/Play N Go.svg',
                    },
                    {
                      label: 'playtect',
                      img: '/assets/provider/Playtech.svg',
                    },
                    {
                      label: 'wmcasino',
                      img: '/assets/provider/WM Casino.svg',
                    },
                    {
                      label: 'redtriger',
                      img: '/assets/provider/Red Tiger.svg',
                    },
                    {
                      label: 'netent',
                      img: '/assets/provider/Net Ent.svg',
                    },
                    {
                      label: 'isopbet',
                      img: '/assets/provider/ISoftbet.svg',
                    },
                    {
                      label: 'bongo',
                      img: '/assets/provider/Booongo.svg',
                    },
                    {
                      label: 'spadegaming',
                      img: '/assets/provider/Spade Gaming.svg',
                    },
                    {
                      label: 'idnlive',
                      img: '/assets/provider/IDN Live.svg',
                    },
                    {
                      label: 'bti',
                      img: '/assets/provider/BTI.svg',
                    },
                    {
                      label: 'sbo',
                      img: '/assets/provider/SBO.svg',
                    },
                    {
                      label: 'saba',
                      img: '/assets/provider/Saba Sport.svg',
                    },
                    {
                      label: 'evolution',
                      img: '/assets/provider/Evolution.svg',
                    },
                    {
                      label: 'ezugi',
                      img: '/assets/provider/Ezugi.svg',
                    },
                    {
                      label: 'balakplay',
                      img: '/assets/provider/Balakplay.svg',
                    },
                  ].map((e, index) => {
                    return (
                      <SwiperSlide key={index.toString()}>
                        <a href='/dsds'>
                          <div>
                            <img
                              src={e.img}
                              alt={e.label}
                              className='object-cover h-full w-full'
                            />
                          </div>
                        </a>
                      </SwiperSlide>
                    )
                  })}
                </SwipperWithButton>
              </div>
            </div>
            <div className='col-span-full'>
              <div className='card --primary grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 p-[1rem] gap-[1rem]'>
                {(props?.listGameHot?.slice(5, 15) || []).map(
                  (e: any, i: number) => {
                    return (
                      <div key={e.id} className='flex flex-col gap-[13px]'>
                        <div className='rounded-[8px] overflow-hidden relative h-0 pb-[74.6%]'>
                          <img
                            src={`${e?.image_url}?width=200&height=150`}
                            alt='game'
                            className='h-full w-full object-cover absolute top-0 bottom-0 left-0 right-0 object-top'
                          />
                        </div>
                        <p className='text-[14px] text-center font-semibold text-white'>
                          {e.name}
                        </p>
                      </div>
                    )
                  },
                )}
              </div>
            </div>
            <div className='col-span-full'>
              <div className='flex flex-col md:flex-row gap-[10px] md:gap-[15px] lg:gap-[24.57px]'>
                <article
                  className='h-full w-full md:h-[498px] md:w-[393px] lg:h-[612px] lg:w-[470px] overflow-hidden rounded-[8px] bg-[#282A2F]
                p-[18px_21.25px_17px_22px] md:p-[13px_18px_22px_24px] lg:p-[18px_22px_24px_24px]
                '
                >
                  <header className='mb-[28px] md:mb-[27px] lg:mb-[39px]'>
                    <h3 className=' text-center font-semibold text-white text-[20px] md:text-[24px] lg:text-[36px]'>
                      {translate('NEW_GAME')}
                    </h3>
                  </header>
                  <div className='flex flex-row gap-[21.25px] md:gap-[19px] lg:gap-[24px] items-center justify-center'>
                    {[1, 1].map((e, i) => (
                      <div key={i.toString()}>
                        <div className='w-[135.75px] h-[101.81px] md:w-[166px] md:h-[124px] lg:w-[200px] lg:h-[150px] rounded-[8px] overflow-hidden border-danger border-[3px] mb-[13px]'>
                          dskjhd
                        </div>
                        <p className='text-white text-center text-[18px] font-semibold'>
                          Game Title
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className='flex flex-row gap-[21.25px] md:gap-[19px] lg:gap-[24px] items-center justify-center mt-[15px] md:mt-[11px] lg:mt-[26px]'>
                    {[1, 1].map((e, i) => (
                      <div key={i.toString()}>
                        <div className='w-[135.75px] h-[101.81px] md:w-[166px] md:h-[124px] lg:w-[200px] lg:h-[150px] rounded-[8px] overflow-hidden border-danger border-[3px] mb-[13px]'>
                          dskjhd
                        </div>
                        <p className='text-white text-center text-[18px] font-semibold'>
                          Game Title
                        </p>
                      </div>
                    ))}
                  </div>
                  <button className=' bg-danger rounded-[8px] text-center text-white w-full h-[61px] mt-[21px]'>
                    {translate('button:PLAY_NOW')}
                  </button>
                </article>
                <article
                  className='h-full w-full md:h-[498px] md:w-[361px] lg:h-[612px] lg:w-[646px] overflow-hidden rounded-[8px] bg-[#282A2F]
                p-[15.3px_20px_18px_19px] md:p-[16px_23.81px_24px_23.21px] lg:p-[18px_29px_24px_29px]
                '
                >
                  <header className='mb-[28px] md:mb-[27px] lg:mb-[39px]'>
                    <h3 className=' text-center font-semibold text-white text-[20px] md:text-[24px] lg:text-[36px]'>
                      {translate('LIVE_CASINO')}
                    </h3>
                  </header>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3 gap-[24px] items-center'>
                    {[1, 1, 1].map((e, i) => {
                      return (
                        <div
                          className={`flex-col items-center justify-center ${
                            i == 2 ? 'md:hidden lg:flex flex' : 'flex'
                          }`}
                          key={i.toString()}
                        >
                          <div className='w-[89.64px] h-[179.73px] md:h-[296px] md:w-[147.18px] lg:h-[362px] lg:w-[180px] border-[3px] border-danger rounded-[8px] mb-[13px]'>
                            dsds
                          </div>
                          <p className='text-white text-center text-[18px] font-semibold'>
                            Game Title
                          </p>
                        </div>
                      )
                    })}
                  </div>
                  <button className=' bg-danger rounded-[8px] text-center text-white w-full h-[61px] mt-[21px]'>
                    {translate('button:PLAY_NOW')}
                  </button>
                </article>
                {/* <article className='bg-[#282A2F] rounded-[8px] w-full h-full md:w-[470px] md:h-[498px] lg:w-[393px] lg:h-[612px] pb-[24px] pl-[24px] pr-[22px] pt-[18px] overflow-hidden'>
                  <header className='mb-[39px]'>
                    <h3 className=' text-center font-semibold text-white text-[20px] md:text-[24px] lg:text-[36px]'>
                      {translate('NEW_GAME')}
                    </h3>
                  </header>
                  <div className='flex flex-row gap-[24px] mb-[26px]'>
                    {[1, 1].map((e, i) => (
                      <div key={i.toString()}>
                        <div className='w-[200px] h-[150px] rounded-[8px] overflow-hidden border-danger border-[3px] mb-[13px]'>
                          dskjhd
                        </div>
                        <p className='text-white text-center text-[18px] font-semibold'>
                          Game Title
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className='flex flex-row gap-[24px] mt-[26px]'>
                    {[1, 1].map((e, i) => (
                      <div key={i.toString()}>
                        <div className='w-[200px] h-[150px] rounded-[8px] overflow-hidden border-danger border-[3px] mb-[13px]'>
                          dskjhd
                        </div>
                        <p className='text-white text-center text-[18px] font-semibold'>
                          Game Title
                        </p>
                      </div>
                    ))}
                  </div>
                  <button className=' bg-danger rounded-[8px] text-center text-white w-full h-[61px] mt-[21px]'>
                    {translate('button:PLAY_NOW')}
                  </button>
                </article>
                <article className='bg-[#282A2F] rounded-[8px] w-full h-full md:h-[498px] md:w-[361px]  lg:w-[646px] lg:h-[612px] pt-[18px] px-[29px] pb-[24px] overflow-hidden'>
                  <header className='mb-[39px]'>
                    <h3 className=' text-center font-semibold text-white text-[20px] md:text-[24px] lg:text-[36px]'>
                      {translate('LIVE_CASINO')}
                    </h3>
                  </header>
                  <div className='grid md:lg:grid-cols-2 grid-cols-3 gap-[24px]'>
                    {[1, 1, 1].map((e, i) => {
                      return (
                        <div
                          className={
                            i == 2 ? 'md:hidden block' : 'flex flex-col'
                          }
                          key={i.toString()}
                        >
                          <div className='w-[89.64px] h-[179.73px] md:h-[296px] md:w-[147.18px] lg:h-[362px] lg:w-[180px] border-[3px] border-danger rounded-[8px] mb-[13px]'>
                            dsds
                          </div>
                          <p className='text-white text-center text-[18px] font-semibold'>
                            Game Title
                          </p>
                        </div>
                      )
                    })}
                  </div>
                  <button className=' bg-danger rounded-[8px] text-center text-white w-full h-[61px] mt-[22px]'>
                    {translate('button:PLAY_NOW')}
                  </button>
                </article> */}
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-[10px] md:gap-[15px] lg:gap-[25px] col-span-full'>
              <div className='flex flex-col'>
                <article
                  className='
                w-full
                md:w-[393px]
                md:h-[207px]
                lg:w-[469px]
                lg:h-[360px]
                bg-[#282A2F]
                overflow-hidden rounded-[8px]
                p-[19.27px_20px_20px_20px]
                md:p-[20px_23px_22px_23px]
                lg:p-[36px_22px_37px_23px]
                '
                >
                  <header className='mb-[27.2px] md:mb-[26px] lg:mb-[64px]'>
                    <h3 className='text-center font-semibold text-white text-[20px] md:text-[24px] lg:text-[36px]'>
                      {translate('title:SERVICE_DURATION')}
                    </h3>
                  </header>
                  <div className='w-full bg-primary rounded-[8px] p-[14px_25px] md:p-[18px_35px] lg:p-[1rem]'>
                    <div className='w-full'>
                      <div className='flex items-center justify-between text-white'>
                        <p className='label-card font-semibold'>
                          {translate('title:TIME_AVERAGE')}
                        </p>
                        <p className='label-card font-light'>
                          1 {translate('title:MINUTE')}
                        </p>
                      </div>
                      <div className='bg-[#400377] rounded-full p-[1px] relative md:m-0 lg:mt-[6px]'>
                        <div className='bg-[#FF3076] h-[9px] lg:h-[14px] rounded-full w-[30%]' />
                      </div>
                    </div>
                    <div className='w-full md:mt-[9px] lg:mt-[20px]'>
                      <div className='flex items-center justify-between text-white'>
                        <p className='label-card font-semibold'>
                          {translate('title:TIME_AVERAGE')}
                        </p>
                        <p className=' label-card font-light'>
                          3 {translate('title:MINUTE')}
                        </p>
                      </div>
                      <div className='bg-[#400377] rounded-full p-[1px] relative mt-[6px]'>
                        <div className='bg-[#FF3076] h-[9px] lg:h-[14px] rounded-full w-[60%]' />
                      </div>
                    </div>
                  </div>
                </article>
                <article className='w-full md:w-[393px] md:h-[186px] lg:w-[469px] lg:h-[381px] bg-[#282A2F] rounded-[8px] mt-[10px] md:mt-[12px] lg:mt-[24px] p-[20px_] md:p-[9px_12px_16px_12px] lg:p-[36px_37px_23px_22px]'>
                  <header className='mb-[16px] md:mb-[19px] lg:mb-[64px]'>
                    <h3 className=' text-center font-semibold text-white text-[20px] md:text-[24px] lg:text-[36px]'>
                      {translate('title:MEMBER_SERVICE')}
                    </h3>
                  </header>
                  <div className='flex flex-row items-center justify-center gap-[47px] md:gap-[63px] lg:gap-[64px]'>
                    <div className='flex items-center justify-center text-center flex-col gap-[15px] md:gap-[11px] lg:gap-[1rem]'>
                      <img
                        className='img-social-media'
                        src='/assets/icons/wa-btn.svg'
                        alt='wa'
                      />
                      <div className=' text-center text-white'>
                        <p className='label-card font-semibold'>WhatsApp</p>
                        <p className='font-light label-card'>0003298392</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-center text-center flex-col gap-[15px] md:gap-[11px] lg:gap-[1rem]'>
                      <img
                        className='img-social-media'
                        src='/assets/icons/telegram-btn.svg'
                        alt='tele'
                      />
                      <div className=' text-center text-white'>
                        <p className='label-card font-semibold'>Telegram</p>
                        <p className='font-light label-card'>0003298392</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div>
                <article className='w-full md:w-[361px] md:h-[405px] lg:w-[647px] lg:h-[765px] bg-[#282A2F] p-[20px] rounded-[8px] md:p-[20px] lg:p-[36px_27px_28px_26px]'>
                  <header className='mb-[30px] md:mb-[27px] lg:mb-[64px]'>
                    <h3 className=' text-center font-semibold text-white text-[20px] md:text-[24px] lg:text-[36px]'>
                      {translate('title:INFORMATION_CENTER')}
                    </h3>
                  </header>
                  <div className='grid grid-cols-3 gap-[13px] lg:gap-[26px] box-border items-center'>
                    {[
                      {
                        link: '/',
                        label: translate('title:JOIN_US'),
                        img: '/assets/icons/joinus_icon.svg',
                      },
                      {
                        link: '/',
                        label: translate('title:SECURITY'),
                        img: '/assets/icons/security_icon.svg',
                      },
                      {
                        link: '/',
                        label: translate('title:ACCESS'),
                        img: '/assets/icons/access_icon.svg',
                      },
                      {
                        link: '/',
                        label: translate('title:ACCOUNT'),
                        img: '/assets/icons/account_icon.svg',
                      },
                      {
                        link: '/',
                        label: translate('title:WITHDRAWAL'),
                        img: '/assets/icons/withdrawal_icon.svg',
                      },
                      {
                        link: '/',
                        label: translate('title:GUIDE'),
                        img: '/assets/icons/guide.svg',
                      },
                      {
                        link: '/',
                        label: translate('title:HELP'),
                        img: '/assets/icons/help_icon.svg',
                      },
                      {
                        link: '/',
                        label: translate('title:BET'),
                        img: '/assets/icons/bet_icon.svg',
                      },
                      {
                        link: '/',
                        label: translate('title:MEMBERSHIP'),
                        img: '/assets/icons/membership_icon.svg',
                      },
                    ].map((e, index) => {
                      return (
                        <div
                          className='flex items-center justify-center'
                          key={index.toString()}
                        >
                          <div className='card --primary text-center flex flex-col items-center justify-center card-info-center gap-[0.5em]'>
                            <img
                              alt={e.label}
                              src={e.img}
                              className='img-info-center'
                            />
                            <p className='label-card font-semibold text-white'>
                              {e.label}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </article>
              </div>
            </div>
            <div className='my-[24px] col-span-full'>
              <div className='divider text-white border-white'>
                <span className='px-[1rem] title-page text-white'>
                  {translate('title:SITE_INFORMATION')}
                </span>
              </div>
              <div>
                <div className='flex items-center justify-between'>
                  <p className='text-white font-semibold text-[18px]'>Title</p>
                  <button
                    onClick={() => setCollapsible(!collapsible)}
                    className='flex items-center justify-center p-[10px]'
                  >
                    <img
                      alt='arrow'
                      src='/assets/icons/arrow.svg'
                      className={`w-[24px] h-[24px] transition-all duration-500 ${
                        !collapsible ? 'rotate-[180deg]' : 'rotate-[0deg]'
                      }`}
                    />
                  </button>
                </div>
                <div
                  className={`${
                    collapsible ? '' : 'h-[50px] collapsible'
                  } transition-all duration-1000 overflow-hidden`}
                >
                  <p className='text-[14px] text-white'>
                    Fugiat irure elit tempor cupidatat aliqua amet reprehenderit
                    eiusmod est. Sit incididunt velit non et reprehenderit
                    minim. Deserunt deserunt elit consequat consectetur
                    pariatur. Dolor quis nisi nulla et commodo adipisicing irure
                    labore sit. Eu qui duis velit sit nisi aliquip nulla sit
                    aliquip. Consectetur officia ut elit minim sunt elit sunt
                    proident ad minim exercitation ut laboris. Adipisicing ea id
                    exercitation ullamco cupidatat culpa id consequat commodo
                    laboris. Incididunt excepteur esse amet est aute irure nisi
                    voluptate nulla Lorem excepteur enim est excepteur. In irure
                    cupidatat magna enim laborum minim ipsum enim esse est culpa
                    ipsum eiusmod labore. Anim deserunt ex tempor dolore ipsum
                    non nulla Lorem. Veniam sint culpa minim consequat amet
                    excepteur anim deserunt eiusmod veniam non Lorem ad. Ad
                    magna do esse ullamco magna in mollit labore labore pariatur
                    nisi. Sit ut laboris occaecat aliquip est.
                  </p>
                </div>
              </div>
              <div className='divider my-[24px]' />
              <div>
                <div className='grid grid-cols-4 md:grid-cols-9 gap-[22px]'>
                  {[
                    {
                      label: 'pragmatic',
                      img: '/assets/provider/Pragmatic.svg',
                    },
                    {
                      label: 'pgsoft',
                      img: '/assets/provider/PG Soft.svg',
                    },
                    {
                      label: 'bahanero',
                      img: '/assets/provider/Habanero.svg',
                    },
                    {
                      label: 'spinomenal',
                      img: '/assets/provider/Spinomenal.svg',
                    },
                    {
                      label: 'yggdrasil',
                      img: '/assets/provider/Yggdrasil.svg',
                    },
                    {
                      label: 'microgaming',
                      img: '/assets/provider/Microgaming.svg',
                    },
                    {
                      label: 'iconic gaming',
                      img: '/assets/provider/Iconic Gaming.svg',
                    },
                    {
                      label: 'play n go',
                      img: '/assets/provider/Play N Go.svg',
                    },
                    {
                      label: 'playtect',
                      img: '/assets/provider/Playtech.svg',
                    },
                    {
                      label: 'wmcasino',
                      img: '/assets/provider/WM Casino.svg',
                    },
                    {
                      label: 'redtriger',
                      img: '/assets/provider/Red Tiger.svg',
                    },
                    {
                      label: 'netent',
                      img: '/assets/provider/Net Ent.svg',
                    },
                    {
                      label: 'isopbet',
                      img: '/assets/provider/ISoftbet.svg',
                    },
                    {
                      label: 'bongo',
                      img: '/assets/provider/Booongo.svg',
                    },
                    {
                      label: 'spadegaming',
                      img: '/assets/provider/Spade Gaming.svg',
                    },
                    {
                      label: 'idnlive',
                      img: '/assets/provider/IDN Live.svg',
                    },
                    {
                      label: 'bti',
                      img: '/assets/provider/BTI.svg',
                    },
                    {
                      label: 'sbo',
                      img: '/assets/provider/SBO.svg',
                    },
                    {
                      label: 'saba',
                      img: '/assets/provider/Saba Sport.svg',
                    },
                    {
                      label: 'evolution',
                      img: '/assets/provider/Evolution.svg',
                    },
                    {
                      label: 'ezugi',
                      img: '/assets/provider/Ezugi.svg',
                    },
                    {
                      label: 'balakplay',
                      img: '/assets/provider/Balakplay.svg',
                    },
                  ].map((e, i) => {
                    return (
                      <div key={i.toString()}>
                        <img
                          src={e.img}
                          alt={e.label}
                          className='w-full aspect-square'
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className='divider my-[24px]' />
              <div className='grid grid-cols-6 gap-[67px]'>
                <div className='col-span-full md:col-span-4'>
                  <p className=' text-primary text-[24px] font-semibold mb-[25px]'>
                    {translate('title:INFORMATION')}
                  </p>
                  <ul className='flex justify-start md:justify-between gap-[0.5rem] flex-wrap'>
                    <li>
                      <a href='/dsds' className='text-white label-link'>
                        {translate('title:ABOUT_US')}
                      </a>
                    </li>
                    <li>
                      <a href='/dsds' className='text-white label-link'>
                        {translate('title:CONTACT_US')}
                      </a>
                    </li>
                    <li>
                      <a href='/dsds' className='text-white label-link'>
                        {translate('title:GET_HELP')}
                      </a>
                    </li>
                    <li>
                      <a href='/dsds' className='text-white label-link'>
                        {translate('title:MORE_INFO')}
                      </a>
                    </li>
                    <li>
                      <a href='/dsds' className='text-white label-link'>
                        {translate('title:TNC')}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-span-full md:col-span-2'>
                  <p className='text-[18px] text-primary font-semibold mb-[25px]'>
                    {translate('title:STAY_CONNECTED')}
                  </p>
                  <div>
                    <ul className='flex items-center gap-[40px]'>
                      <li>
                        <a href='/dsds'>
                          <img
                            alt='social-media'
                            src='/assets/icons/facebook_Icon.svg'
                            className='img-social-media-md'
                          />
                        </a>
                      </li>
                      <li>
                        <a href='/dsds'>
                          <img
                            alt='social-media'
                            src='/assets/icons/twitter_Icon.svg'
                            className='img-social-media-md'
                          />
                        </a>
                      </li>
                      <li>
                        <a href='/dsds'>
                          <img
                            alt='social-media'
                            src='/assets/icons/instagram_Icon.svg'
                            className='img-social-media-md'
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='divider my-[24px]' />
              <div>
                <p className='text-[18px] text-primary font-semibold mb-[25px]'>
                  {translate('title:PAYMENT_METHOD')}
                </p>

                <ul className='grid grid-cols-3 items-center md:grid-cols-5'>
                  <li className='flex items-center justify-center'>
                    <a href='/dsds'>
                      <img
                        src='/assets/payment/mandiri 1.svg'
                        alt='bank'
                        className='img-bank'
                      />
                    </a>
                  </li>
                  <li className='flex items-center justify-center'>
                    <a href='/dsds'>
                      <img
                        src='/assets/payment/bca 1.svg'
                        alt='bank'
                        className='img-bank'
                      />
                    </a>
                  </li>
                  <li className='flex items-center justify-center'>
                    <a href='/dsds'>
                      <img
                        src='/assets/payment/bni 1.svg'
                        alt='bank'
                        className='img-bank'
                      />
                    </a>
                  </li>
                  <li className='flex items-center justify-center'>
                    <a href='/dsds'>
                      <img
                        src='/assets/payment/BRI 1.svg'
                        alt='bank'
                        className='img-bank'
                      />
                    </a>
                  </li>
                  <li className='flex items-center justify-center'>
                    <a href='/dsds'>
                      <img
                        src='/assets/payment/permata 1.svg'
                        alt='bank'
                        className='img-bank'
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
export const getServerSideProps = async (props: any) => {
  const listGameHot = await axiosClient.get('/games/hot')
  const listGameLobby = await axiosClient.get('/games/lobbies')
  const translation = await serverSideTranslations(props.locale, [
    'title',
    'button',
  ])
  return {
    props: {
      ...translation,
      listGameHot: listGameHot.data?.data || [],
      listGameLobby: listGameLobby.data?.data || [],
    },
  }
}
export default Home
