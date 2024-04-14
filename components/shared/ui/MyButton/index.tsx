'use client'

import React from 'react'

interface MyButtonProps {
    children: string;
    handler: () => void;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
    className?: string;
}

export const MyButton = ({children, handler, type='button', className=''}: MyButtonProps) => {
  return (
    <button type={type} onClick={handler}
        className={`${className} w-full py-4 px-6 bg-primary-color rounded-2xl text-base lg:text-3xl text-stone-300 hover:bg-white hover:text-black transition-all`}
    >
        {children}
    </button>
  )
}
