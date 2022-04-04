/* eslint-disable @next/next/no-img-element */
import React from 'react'

function SideMenuComponent() {
  return (
    <div className='top-0 bottom-0 fixed z-30 hidden md:block'>
      <aside className='h-screen sticky top-0 bg-[#1F2127] pt-[64px] w-[89px]  overflow-auto'>
        <div className='grid gap-[1rem] mt-[1rem]'>
          {[
            {
              img: '/assets/menu/home-icon.svg',
              alt: 'home',
              path: '/home',
            },
            {
              img: '/assets/menu/sportsbook-icon.svg',
              alt: 'sport',
              path: '/sport',
            },
            {
              img: '/assets/menu/slots-icon.svg',
              alt: 'slots',
              path: '/slots',
            },
            {
              img: '/assets/menu/casino-icon.svg',
              alt: 'casino',
              path: '/casino',
            },
            {
              img: '/assets/menu/p2p-icon.svg',
              alt: 'p2p',
              path: '/p2p',
            },
            {
              img: '/assets/menu/cockfight-icon.svg',
              alt: 'cockfight',
              path: '/cockfight',
            },
            {
              img: '/assets/menu/fishing-icon.svg',
              alt: 'fishing',
              path: '/fishing',
            },
            {
              img: '/assets/menu/all-game-icon.svg',
              alt: 'all',
              path: '/all',
            },
            {
              img: '/assets/menu/promotion-icon.svg',
              alt: 'promo',
              path: '/promo',
            },
          ].map((e, i) => {
            return (
              <a
                key={i.toString()}
                href={e.path}
                className=' hover:scale-105 w-full h-full items-center justify-center flex'
              >
                <img
                  src={e.img}
                  alt={e.alt}
                  className='lg:h-[60px] md:h-[40px] aspect-square'
                />
              </a>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default SideMenuComponent
