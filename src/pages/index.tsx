/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import type { NextPage } from 'next'
import React, { useState } from 'react'
import { SwipperComponent, SwipperWithButton } from '../partials/Swipper'
import { SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// import HeaderComponent from '../components/HeaderComponent'
// import MarqueeComponent from '../partials/MarqueeComponent'
// import SideMenuComponent from '../components/SideMenuComponent'

const HeaderComponent = dynamic(() => import('../components/HeaderComponent'))
const MarqueeComponent = dynamic(() => import('../partials/MarqueeComponent'))
const SideMenuComponent = dynamic(
  () => import('../components/SideMenuComponent'),
)

const Home: NextPage = props => {
  console.log({ props })

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
            <div className='col-span-full md:col-[1/4] rounded-[8px] pb-[48%] h-0 overflow-hidden'>
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
                        <div className='relative overflow-hidden h-0 pb-[48%] box-border'>
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
              {new Array(4).fill(0).map((e, i) => {
                return (
                  <div
                    className='h-full w-full rounded-[8px] overflow-hidden'
                    key={i.toString()}
                  >
                    <img
                      alt='images-game'
                      className='h-full w-full object-cover'
                      src='https://i.ibb.co/60wjPM0/zeus-slot.jpg'
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
                  <span>Promotion</span>
                </button>
              </Link>
              <Link href='/register' passHref>
                <button className='btn --primary --lg'>
                  <img
                    alt='registration'
                    src='/assets/icons/registration-icon.svg'
                  />
                  <span>Sign Up</span>
                </button>
              </Link>
              <Link href='/login' passHref>
                <button className='btn --accent --lg'>
                  <img alt='login' src='/assets/icons/login-icon-v2.svg' />
                  <span>Log In</span>
                </button>
              </Link>
            </div>
            <div className=' col-span-full'>
              <div className='divider'>
                <span className='px-[1rem] title-page text-white'>
                  Recommended Game
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
                {new Array(10).fill(0).map((e, i) => {
                  return (
                    <div
                      key={i.toString()}
                      className='flex flex-col gap-[1rem]'
                    >
                      <div className='rounded-[8px] overflow-hidden'>
                        <img
                          src='https://pnimg.net/w/articles/4/5b0/eae3d31ca3.png'
                          alt='game'
                          className='h-full w-full object-cover'
                        />
                      </div>
                      <p className='text-[14px] text-center font-semibold text-white'>
                        Netent Game
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className=' col-span-full'>
              <div className='grid grid-cols-5 gap-[1rem]'>
                <article className='grid-rows-[auto_1fr_auto] grid items-center col-span-full md:col-span-2 relative gap-[1rem] card --dark p-[1rem]'>
                  <div className='text-white border-white divider'>
                    <span className='px-[1rem] title-page text-white'>
                      Game Baru
                    </span>
                  </div>
                  <div className='grid-cols-2 grid-row-2 gap-[1em]  grid'>
                    {new Array(4).fill(0).map((e, i) => {
                      return (
                        <div key={i.toString()} className='grid gap-[1rem]'>
                          <div className='flex flex-col border border-danger rounded-[8px] overflow-hidden'>
                            <img
                              src='https://d3ejb2l5e3bvmc.cloudfront.net/game-images/pg-soft/3973/thumbnail.jpg'
                              alt='casino'
                              className='h-full w-full'
                            />
                          </div>
                          <p className='text-white font-semibold text-[14px] text-center'>
                            Game Title
                          </p>
                        </div>
                      )
                    })}
                  </div>
                  <button className='btn --lg --danger'>
                    <span>Play Now</span>
                  </button>
                </article>
                <article className='grid-rows-[auto_1fr_auto] grid items-center col-span-full md:col-[3/6] relative box-border p-[1em] card --dark gap-[1em]'>
                  <div className='text-white border-white divider'>
                    <span className='px-[1rem] title-page text-white'>
                      Live Casino
                    </span>
                  </div>
                  <div className='grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-[1em] grid'>
                    {new Array(3).fill(0).map((e, i) => {
                      return (
                        <div
                          key={i.toString()}
                          className={`gap-[1rem] ${
                            i == 2 ? 'grid md:hidden lg:grid' : 'grid'
                          }`}
                        >
                          <div className='flex flex-col border border-danger rounded-[8px] overflow-hidden'>
                            <img
                              src='https://dmwl0ca1bvnm.cloudfront.net/common/dark/casino/vivo-gaming.png'
                              alt='casino'
                              className='h-full w-full'
                            />
                          </div>
                          <p className='text-white font-semibold text-[14px] text-center'>
                            Game Title {i}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                  <button className='btn --lg --danger'>
                    <span>Play Now</span>
                  </button>
                </article>
              </div>
            </div>
            <div className='grid grid-cols-5 gap-[24px] mt-[24px] col-span-full'>
              <div className='order-1 col-span-full md:col-span-2 bg-[#282A2F] rounded-[8px] p-[1rem] flex flex-col justify-between gap-[1rem]'>
                <div className='text-center text-white border-white'>
                  <span className='px-[1rem] title-page text-white'>
                    Service Duration
                  </span>
                </div>
                <div className='w-full bg-primary rounded-[8px] p-[24px]'>
                  <div className='w-full'>
                    <div className='flex items-center justify-between text-white'>
                      <p className='label-card font-semibold'>
                        Waktu Rata-Rata
                      </p>
                      <p className=' label-card font-light'>1 Menit</p>
                    </div>
                    <div className='bg-[#400377] rounded-full p-[1px] relative mt-[6px]'>
                      <div className='bg-[#FF3076] h-[14px] rounded-full w-[30%]' />
                    </div>
                  </div>
                  <div className='w-full mt-[20px]'>
                    <div className='flex items-center justify-between text-white'>
                      <p className='label-card font-semibold'>
                        Waktu Rata-Rata
                      </p>
                      <p className=' label-card font-light'>3 Menit</p>
                    </div>
                    <div className='bg-[#400377] rounded-full p-[1px] relative mt-[6px]'>
                      <div className='bg-[#FF3076] h-[14px] rounded-full w-[60%]' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='order-3 md:order-2 col-span-full md:col-[3/6] row-span-2 bg-[#282A2F] rounded-[8px] flex flex-col justify-between gap-[1rem] p-[1rem]'>
                <div className='text-white text-center border-white'>
                  <span className='px-[1rem] title-page text-white'>
                    Information Center
                  </span>
                </div>
                <div className='grid grid-cols-3 gap-[1rem] box-border items-center'>
                  {[
                    {
                      link: '/',
                      label: 'Join Us',
                      img: '/assets/icons/joinus_icon.svg',
                    },
                    {
                      link: '/',
                      label: 'Security',
                      img: '/assets/icons/security_icon.svg',
                    },
                    {
                      link: '/',
                      label: 'Access',
                      img: '/assets/icons/access_icon.svg',
                    },
                    {
                      link: '/',
                      label: 'Account',
                      img: '/assets/icons/account_icon.svg',
                    },
                    {
                      link: '/',
                      label: 'Withdrawal',
                      img: '/assets/icons/withdrawal_icon.svg',
                    },
                    {
                      link: '/',
                      label: 'Guide',
                      img: '/assets/icons/guide.svg',
                    },
                    {
                      link: '/',
                      label: 'Help',
                      img: '/assets/icons/help_icon.svg',
                    },
                    {
                      link: '/',
                      label: 'Bet',
                      img: '/assets/icons/bet_icon.svg',
                    },
                    {
                      link: '/',
                      label: 'Membership',
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
              </div>
              <div className='order-2 md:order-3 col-span-full md:col-span-2 card --dark flex justify-between flex-col p-[1rem] gap-[1rem]'>
                <div className='text-center text-white border-white'>
                  <span className='px-[1rem] title-page text-white'>
                    Member Service
                  </span>
                </div>
                <div className='grid grid-cols-2 items-center'>
                  <div className='flex items-center justify-center text-center flex-col gap-[1rem]'>
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
                  <div className='flex items-center justify-center text-center flex-col gap-[1rem]'>
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
              </div>
            </div>
            <div className='my-[24px] col-span-full'>
              <div className='divider text-white border-white'>
                <span className='px-[1rem] title-page text-white'>
                  Site Information
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
              <div className='grid grid-cols-5 gap-[67px]'>
                <div className='col-span-full md:col-span-3'>
                  <p className=' text-primary text-[24px] font-semibold mb-[25px]'>
                    Information
                  </p>
                  <ul className='flex justify-between'>
                    <li>
                      <a href='/dsds' className='text-white label-link'>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href='/dsds' className='text-white label-link'>
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href='/dsds' className='text-white label-link'>
                        Get Help
                      </a>
                    </li>
                    <li>
                      <a href='/dsds' className='text-white label-link'>
                        More Info
                      </a>
                    </li>
                    <li>
                      <a href='/dsds' className='text-white label-link'>
                        Terms & Condition
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-span-full md:col-span-2'>
                  <p className='text-[18px] text-primary font-semibold mb-[25px]'>
                    Stay Connected
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
                  Stay Connected
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
export default Home
