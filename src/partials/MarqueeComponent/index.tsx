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
      className={`${props?.className} h-[61px] rounded-[8px] bg-[${
        props?.background || '#1F2127'
      }] text-white flex items-center gap-[19px] p-[26px] text-[18px]`}
    >
      {props?.icons && (
        <Image
          alt='ticker-icon'
          src='/assets/icons/ticker-icon.svg'
          className='h-[20px] w-[20px]'
          height={20}
          width={20}
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
