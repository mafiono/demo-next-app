import React from 'react'
import cogoToast from 'cogo-toast'

interface Props {
  type: 'error' | 'info' | 'success'
  label: string
  message?: string
}
export function baseToast(props: Props) {
  const { hide } = cogoToast[props.type](
    props.label ? (
      <div>
        <b>{props.label}</b>
        <p>{props.message}</p>
      </div>
    ) : (
      'Internal Server Error'
    ),
    {
      onClick: () => {
        hide()
      },
    },
  )
}
