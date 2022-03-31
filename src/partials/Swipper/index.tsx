/* eslint-disable @next/next/no-img-element */
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const SwipperComponent = (props: Props & SwiperProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={props.slidesPerView}
      {...props}
    >
      {props.children}
    </Swiper>
  )
}

const SwipperWithButton = (props: Props & SwiperProps) => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <div className='flex w-full gap-[1rem] items-center'>
      <button
        ref={navigationPrevRef}
        className='h-[30px] w-[30px] aspect-square'
      >
        <img
          alt='left-btn'
          src='/assets/icons/left-icon.svg'
          className='h-full w-full aspect-square'
        />
      </button>

      <Swiper
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={swiper => {
          //@ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef.current
          //@ts-ignore
          swiper.params.navigation.nextEl = navigationNextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={props.slidesPerView}
        {...props}
      >
        {props.children}
      </Swiper>
      <button
        ref={navigationNextRef}
        className='h-[30px] w-[30px] aspect-square'
      >
        <img
          alt='left-btn'
          src='/assets/icons/right-icon.svg'
          className='h-full w-full aspect-square'
        />
      </button>
    </div>
  )
}

export { SwipperWithButton, SwipperComponent }
