/* eslint-disable @next/next/no-img-element */
import React, { HTMLAttributes, InputHTMLAttributes } from 'react'

interface Props {
  id: string
  rightIcon?: string
  leftIcon?: string
  rightIconType?: 'button' | 'icon' | undefined
  leftIconType?: 'button' | 'icon' | undefined
  placeholder: string
  label?: string
  error?: boolean
  errorMessage?: string
  size?: 'sm' | 'lg'
  handleClickRightIcon?: (e: any) => void
  onChange: (e: any) => void
  type?: string
  name: string
  autoComplete?: string
}

function BaseInputText(props: Props) {
  var inputSize = ''
  var imageSize = ''
  var textSize = ''
  switch (props.size) {
    case 'sm':
      inputSize = ' py-[.3rem]  px-[1.5rem] '
      imageSize = 'w-[15px] aspect-square'
      textSize = 'text-sm'
      break
    case 'lg':
      inputSize = ' py-[1rem]  px-[2.5rem] '
      imageSize = 'w-[20px] aspect-square'
      textSize = 'text-lg'
      break
    default:
      inputSize = ' py-[.5rem]  px-[2.2rem] '
      imageSize = 'w-[25px] aspect-square'
      textSize = 'text-md'
      break
  }
  return (
    <div id={props.id} className=' relative w-full mb-[1rem] transition-all'>
      {props.label && (
        <label className={`block ${textSize} text-white mb-[.25rem]`}>
          {props.label}
        </label>
      )}
      <div className=' flex flex-row rounded-[8px] box-border relative'>
        <input
          autoComplete={props.autoComplete}
          onChange={props.onChange}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          className={`
          ${props.error ? '' : 'hover:border-primary'}
          w-full
          outline-none
          border-[2px]
          ${inputSize}
          ${textSize}
          border-${props.error ? 'danger' : 'white'}
          rounded-[8px]`}
        />
        {props.rightIcon && (
          <div className='absolute right-[0.5rem] z-[3] cursor-pointer flex items-center justify-center top-0 bottom-0'>
            {props.rightIconType == 'button' ? (
              <button
                onClick={props.handleClickRightIcon}
                className='flex items-center justify-center'
              >
                <img
                  className={imageSize}
                  alt={`alt-${props.id}`}
                  src={props.rightIcon}
                />
              </button>
            ) : (
              <img className='' alt={`alt-${props.id}`} src={props.rightIcon} />
            )}
          </div>
        )}
        {props.leftIcon && (
          <div className='absolute left-[0.5rem] z-[3] cursor-pointer flex top-0 bottom-0 items-center justify-center '>
            <img
              className={imageSize}
              alt={`alt-${props.id}`}
              src={props.leftIcon}
            />
          </div>
        )}
      </div>
      <div
        className={`mt-[0.5rem] flex flex-row gap-[.5rem] items-center ${
          props.error ? 'block' : 'hidden'
        }`}
      >
        <img
          className={imageSize}
          alt={`alt-${props.id}`}
          src='/assets/icons/warning-icon.svg'
        />
        <p className='text-xs text-danger'>{props?.errorMessage || 'Error'}</p>
      </div>
    </div>
  )
}

export default BaseInputText
