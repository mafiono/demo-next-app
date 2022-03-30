/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import styles from '../styles/home.module.scss'
import Marquee from 'react-fast-marquee'

const Home: NextPage = props => {
  const [collapsible, setCollapsible] = useState(false)
  return (
    <React.Fragment>
      <HeaderComponent />
      <main className='relative'>
        <div className='container mx-auto pt-[22px]'>
          <div className='h-[61px] rounded-[8px] bg-[#1F2127] text-white flex items-center gap-[19px] p-[26px] text-[18px] mb-[24px]'>
            <img
              src='/assets/icons/ticker-icon.svg'
              className='h-[20px] w-[20px]'
            />
            <Marquee gradientColor={[31, 33, 39]} speed={100}>
              Ullamco eiusmod nulla aliquip quis non amet esse. Non cillum id
            </Marquee>
          </div>
          {/* // */}
          <div className='grid grid-cols-5 gap-[25px]'>
            <div className='col-[1/4] '>
              <div className=' relative h-0 pb-[40%] overflow-hidden rounded-[8px]'>
                <img
                  src='https://rocketsandrascals.net/wp-content/uploads/2021/12/219.jpg'
                  className='w-full absolute top-0 bottom-0 left-0 right-0 object-cover h-full'
                />
              </div>
            </div>
            <div className='grid grid-cols-2 col-span-2 row-span-2 gap-[24px]'>
              {Array(4)
                .fill(0)
                .map((e, i) => {
                  return (
                    <div
                      className='h-full w-full bg-[#883DDA] rounded-[8px]'
                      key={i.toString()}
                    ></div>
                  )
                })}
            </div>
            <div className='grid grid-cols-3 col-span-3 gap-[25px]'>
              <a
                href='/dsklh'
                className='bg-[#FF3076] rounded-[8px] w-full h-[61px] text-center text-white flex items-center justify-center gap-[16px]'
              >
                <img
                  className='h-[30px] w-[30px]'
                  src='/assets/icons/promotion-icon.svg'
                />
                <span className='text-[20px] font-semibold'>Promotion</span>
              </a>
              <a
                href='/dsklh'
                className='bg-[#883DDA] rounded-[8px] w-full h-[61px] text-center text-white flex items-center justify-center gap-[16px]'
              >
                <img
                  className='h-[30px] w-[30px]'
                  src='/assets/icons/registration-icon.svg'
                />
                <span className='text-[20px] font-semibold'>Sign Up</span>
              </a>
              <a
                href='/dsklh'
                className='bg-[#5605A0] rounded-[8px] w-full h-[61px] text-center text-white flex items-center justify-center gap-[16px]'
              >
                <img
                  className='h-[30px] w-[30px]'
                  src='/assets/icons/login-icon-v2.svg'
                />
                <span className='text-[20px] font-semibold'>Log In</span>
              </a>
            </div>
          </div>
          <div className='divider text-white border-white my-[24px]'>
            <span className='px-[20px] text-[36px] font-semibold'>
              Recommended Game
            </span>
          </div>
          <div className='h-[146px] w-full bg-[#1F2127] rounded-[8px] flex items-center px-[26px]'>
            <div>
              <img
                className='h-[30px] w-[30px]'
                src='/assets/icons/left-icon.svg'
              />
            </div>
            <div className='flex items-center justify-evenly flex-1'>
              {new Array(8).fill(0).map((e, index) => {
                return (
                  <div key={index.toString()} className='text-center'>
                    <div className='rounded-full bg-primary h-[90px] w-[90px]'></div>
                    <p className='text-primary font-semibold text-[14px]'>
                      Provider
                    </p>
                  </div>
                )
              })}
            </div>
            <div>
              <img
                className='h-[30px] w-[30px]'
                src='/assets/icons/right-icon.svg'
              />
            </div>
          </div>
          <div className='mt-[24px] bg-primary rounded-[8px] p-[22px]'>
            <div className='grid grid-cols-5 gap-[24px]'>
              {new Array(10).fill(0).map((e, index) => {
                return (
                  <div key={index.toString()} className='text-center'>
                    <div className='bg-[#47484D] rounded-[8px] w-[200px] h-[150px]'></div>
                    <p className='text-white font-semibold text-[18px]'>
                      Game Title
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
          {/* // */}
          <div className='grid grid-cols-5 mt-[24px] gap-[24px]'>
            <div className='bg-[#282A2F] col-span-2 items-center box-border grid-rows-[auto_1ftr_auto] rounded-[8px] py-[18px] flex flex-col'>
              <div className='w-full px-[22px]'>
                <div className='divider text-white border-white'>
                  <span className='px-[20px] text-[36px] font-semibold'>
                    Game Baru
                  </span>
                </div>
              </div>
              <div className='flex items-center flex-1'>
                <div className='grid grid-cols-2 gap-[22px] items-center'>
                  {new Array(4).fill(0).map((e, index) => {
                    return (
                      <div
                        key={index.toString()}
                        className='text-center box-border'
                      >
                        <div className='bg-[#47484D] border-[3px] border-[#FF3076] rounded-[8px] w-[200px] h-[150px]'></div>
                        <p className='text-white font-semibold text-[18px]'>
                          Game Title
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className='w-full px-[23px] mt-[24px]'>
                <button className=' rounded-[8px] h-[61px] bg-[#FF3076] w-full'>
                  <span className='text-[20px] text-white font-semibold'>
                    Play Now
                  </span>
                </button>
              </div>
            </div>
            <div className='bg-[#282A2F] col-span-3 items-center box-border grid-rows-[auto_1ftr_auto] rounded-[8px] py-[18px] flex flex-col'>
              <div className='w-full px-[22px]'>
                <div className='divider text-white border-white'>
                  <span className='px-[20px] text-[36px] font-semibold'>
                    Live Casino
                  </span>
                </div>
              </div>
              <div className='flex items-center flex-1'>
                <div className='grid grid-cols-3 gap-[24px] items-center'>
                  {new Array(3).fill(0).map((e, index) => {
                    return (
                      <div
                        key={index.toString()}
                        className='text-center box-border'
                      >
                        <div className='bg-[#47484D] border-[3px] border-[#FF3076] rounded-[8px] w-[180px] h-[362px]'></div>
                        <p className='text-white font-semibold text-[18px]'>
                          Game Title
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className='w-full px-[23px] mt-[24px]'>
                <button className=' rounded-[8px] h-[61px] bg-[#FF3076] w-full'>
                  <span className='text-[20px] text-white font-semibold'>
                    Play Now
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* // */}
          <div className='grid grid-cols-5 gap-[24px] mt-[24px]'>
            <div className='col-span-2 bg-[#282A2F] rounded-[8px] p-[23px] flex flex-col justify-between'>
              <div className='text-center text-white border-white'>
                <span className='px-[20px] text-[36px] font-semibold'>
                  Service Duration
                </span>
              </div>
              <div className='w-full bg-primary rounded-[8px] p-[24px]'>
                <div className='w-full'>
                  <div className='flex items-center justify-between'>
                    <p className='text-[16px] text-white font-semibold'>
                      Waktu Rata-Rata
                    </p>
                    <p className='text-[16px] text-white font-light'>1 Menit</p>
                  </div>
                  <div className='bg-[#400377] rounded-full p-[1px] relative mt-[6px]'>
                    <div className='bg-[#FF3076] h-[14px] rounded-full w-[30%]' />
                  </div>
                </div>
                <div className='w-full mt-[20px]'>
                  <div className='flex items-center justify-between'>
                    <p className='text-[16px] text-white font-semibold'>
                      Waktu Rata-Rata
                    </p>
                    <p className='text-[16px] text-white font-light'>3 Menit</p>
                  </div>
                  <div className='bg-[#400377] rounded-full p-[1px] relative mt-[6px]'>
                    <div className='bg-[#FF3076] h-[14px] rounded-full w-[60%]' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-[3/6] row-span-2 bg-[#282A2F] rounded-[8px] flex flex-col justify-between'>
              <div className='text-white text-center border-white'>
                <span className='px-[20px] text-[36px] font-semibold'>
                  Information Center
                </span>
              </div>
              <div className='grid grid-cols-3 gap-[26px] p-[26px] box-border'>
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
                      key={index.toString()}
                      className='bg-primary h-[180px] w-180px rounded-[8px] text-center flex flex-col items-center justify-center'
                    >
                      <img src={e.img} className='h-[70px] w-[70px]' />
                      <p className='text-white font-semibold text-[20px]'>
                        {e.label}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className=' col-span-2 bg-[#282A2F] rounded-[8px] flex justify-between flex-col py-[24px]'>
              <div className='text-center text-white border-white'>
                <span className='px-[20px] text-[36px] font-semibold'>
                  Member Service
                </span>
              </div>
              <div className='grid grid-cols-2 items-center'>
                <div className='flex items-center justify-center text-center flex-col'>
                  <img
                    className='w-[112px] h-[112px]'
                    src='/assets/icons/wa-btn.svg'
                  />
                  <div className=' text-center mt-[50px] text-white'>
                    <p className='font-semibold'>WhatsApp</p>
                    <p>0003298392</p>
                  </div>
                </div>
                <div className='flex items-center justify-center text-center flex-col'>
                  <img
                    className='w-[112px] h-[112px]'
                    src='/assets/icons/telegram-btn.svg'
                  />
                  <div className=' text-center mt-[50px] text-white'>
                    <p className='font-semibold'>Telegram</p>
                    <p>0003298392</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='my-[24px]'>
            <div className='divider text-white border-white'>
              <span className='px-[20px] text-[36px] font-semibold'>
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
                  eiusmod est. Sit incididunt velit non et reprehenderit minim.
                  Deserunt deserunt elit consequat consectetur pariatur. Dolor
                  quis nisi nulla et commodo adipisicing irure labore sit. Eu
                  qui duis velit sit nisi aliquip nulla sit aliquip. Consectetur
                  officia ut elit minim sunt elit sunt proident ad minim
                  exercitation ut laboris. Adipisicing ea id exercitation
                  ullamco cupidatat culpa id consequat commodo laboris.
                  Incididunt excepteur esse amet est aute irure nisi voluptate
                  nulla Lorem excepteur enim est excepteur. In irure cupidatat
                  magna enim laborum minim ipsum enim esse est culpa ipsum
                  eiusmod labore. Anim deserunt ex tempor dolore ipsum non nulla
                  Lorem. Veniam sint culpa minim consequat amet excepteur anim
                  deserunt eiusmod veniam non Lorem ad. Ad magna do esse ullamco
                  magna in mollit labore labore pariatur nisi. Sit ut laboris
                  occaecat aliquip est.
                </p>
              </div>
            </div>
            <div className='divider my-[24px]' />
            <div>
              <div className='grid grid-cols-9 gap-[22px]'>
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
              <div className='col-span-4'>
                <p className=' text-primary text-[24px] font-semibold mb-[25px]'>
                  Information
                </p>
                <ul className='flex justify-between'>
                  <li>
                    <a
                      href='/dsds'
                      className='text-white hover:underline  text-[18px]'
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href='/dsds'
                      className='text-white hover:underline  text-[18px]'
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href='/dsds'
                      className='text-white hover:underline  text-[18px]'
                    >
                      Get Help
                    </a>
                  </li>
                  <li>
                    <a
                      href='/dsds'
                      className='text-white hover:underline  text-[18px]'
                    >
                      More Info
                    </a>
                  </li>
                  <li>
                    <a
                      href='/dsds'
                      className='text-white hover:underline  text-[18px]'
                    >
                      Terms & Condition
                    </a>
                  </li>
                </ul>
              </div>
              <div className=' col-span-1'>
                <p className='text-[18px] text-primary font-semibold mb-[25px]'>
                  Stay Connected
                </p>
                <div>
                  <ul className='flex items-center gap-[40px]'>
                    <li>
                      <a href='/dsds'>
                        <img
                          src='/assets/icons/facebook_Icon.svg'
                          className='h-[50px] aspect-square'
                        />
                      </a>
                    </li>
                    <li>
                      <a href='/dsds'>
                        <img
                          src='/assets/icons/twitter_Icon.svg'
                          className='h-[50px] aspect-square'
                        />
                      </a>
                    </li>
                    <li>
                      <a href='/dsds'>
                        <img
                          src='/assets/icons/instagram_Icon.svg'
                          className='h-[50px] aspect-square'
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

              <ul className='grid grid-cols-5'>
                <li className='flex items-center justify-center'>
                  <a href='/dsds'>
                    <img
                      src='/assets/payment/mandiri 1.svg'
                      className='h-[149px] w-[149px]'
                    />
                  </a>
                </li>
                <li className='flex items-center justify-center'>
                  <a href='/dsds'>
                    <img
                      src='/assets/payment/bca 1.svg'
                      className='h-[149px] w-[149px]'
                    />
                  </a>
                </li>
                <li className='flex items-center justify-center'>
                  <a href='/dsds'>
                    <img
                      src='/assets/payment/bni 1.svg'
                      className='h-[149px] w-[149px]'
                    />
                  </a>
                </li>
                <li className='flex items-center justify-center'>
                  <a href='/dsds'>
                    <img
                      src='/assets/payment/BRI 1.svg'
                      className='h-[149px] w-[149px]'
                    />
                  </a>
                </li>
                <li className='flex items-center justify-center'>
                  <a href='/dsds'>
                    <img
                      src='/assets/payment/permata 1.svg'
                      className='h-[149px] w-[149px]'
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default Home
