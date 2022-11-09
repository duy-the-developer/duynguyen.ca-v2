'use client'

import { ReactNode } from 'react'

export default ({
  cStyle,
  children,
}: {
  cStyle?: string
  children: ReactNode
}) => {
  return (
    <div
      className={`p-4 resize overflow-auto min-w-[250px] w-[65vw] h-[90vh] dark:bg-dbg border-2 border-t-0 border-solid border-gray ${cStyle}`}
    >
      {children}
    </div>
  )
}
