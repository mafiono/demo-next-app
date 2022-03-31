/* eslint-disable @next/next/no-img-element */
import React from 'react'
interface Props {
  icon?: string
  classNameIcon?: string
  classNameIconLeft?: string
  classNameContainer?: string
  placeholder?: string
  type?: string
  leftIcon?: string
  name?: string
  error?: boolean
  errorMessage?: string
  classNameError?: string
}
function TextInput(props: Props) {
  return (
    <div className='flex flex-col justify-start gap-[0.5rem]'>
      <div className={`${props.classNameContainer} input-md`}>
        {props.icon && (
          <img
            alt='user-input'
            className={`${props.classNameIcon} h-full aspect-square`}
            src={props.icon}
          />
        )}
        <input
          name={props.name}
          placeholder={props.placeholder}
          type={props.type}
        />
        {props.leftIcon && (
          <img
            alt='user-input'
            className={`${props.classNameIconLeft} h-full aspect-square`}
            src={props.leftIcon}
          />
        )}
      </div>
      {props.error && (
        <div
          className={`${props.classNameError} flex items-center justify-start gap-[0.5rem]`}
        >
          <img
            src='/assets/icons/warning-icon.svg'
            alt='warning-icon'
            className='h-[16px] aspect-square'
          />
          <p className='text-[12px] text-white italic'>
            {props?.errorMessage || 'Error'}
          </p>
        </div>
      )}
    </div>
  )
}

export default TextInput
