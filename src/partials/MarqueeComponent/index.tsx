/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'
interface Props {
  icons?: boolean
  children: React.ReactNode
  background?: string
  gradientColor?: [number, number, number]
  speed?: number
  className?: string
}
const MarqueeComponent = (props: Props) => {
  return (
    <div
      className={`${
        props?.className
      } text-[10px] md:text-[18px] h-[31px] md:h-[61px] card --dark rounded-[8px] bg-[${
        props?.background || '#1F2127'
      }] text-white flex items-center gap-[19px] p-[1rem] text-[18px]`}
    >
      {props?.icons && (
        <img
          alt='ticker-icon'
          src='/assets/icons/ticker-icon.svg'
          className='h-[20px] w-[20px]'
        />
      )}
      <Marquee
        gradientColor={props?.gradientColor || [31, 33, 39]}
        speed={props?.speed || 100}
      >
        {props.children}
      </Marquee>
    </div>
  )
}

export default MarqueeComponent
