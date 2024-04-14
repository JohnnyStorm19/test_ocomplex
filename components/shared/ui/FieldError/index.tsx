import React from 'react'

export const FieldError = ({message}: {message: string}) => {
  return (
    <span className='block text-red-500 text-base'>
      {message}
    </span>
  )
}
