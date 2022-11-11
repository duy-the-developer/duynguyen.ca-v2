'use client'
// Types
import type { MouseEvent, SetStateAction, Dispatch } from 'react'

// Modules

import TabArrow from '../../../../src/components/common/TabArrow'
import StatusLine from './StatusLine'

type TProps = {
  cBgStyle: string
  cBorderStyle: string
  name: string
  index: number
  removeWindow: (windowToRemove: string, index: number) => void
  setDisableDrag: Dispatch<SetStateAction<boolean>>
}

const MenuBar = ({
  cBgStyle,
  cBorderStyle,
  name,
  index,
  removeWindow,
  setDisableDrag,
}: TProps) => {
  const handleCloseWindow = (e: MouseEvent<HTMLButtonElement>) => {
    removeWindow(name, index)
  }

  return (
    <div
      className={`sticky top-0 rounded-t-lg flex items-center justify-between bg-dgray dark:bg-dgray dark:text-fg select-none`}
      onPointerDown={(e) => {
        e.stopPropagation()
        setDisableDrag(false)
      }}
      onPointerUp={(e) => {
        e.stopPropagation()
        setDisableDrag(true)
      }}
    >
      <StatusLine name={name} cBgStyle={cBgStyle} cBorderStyle={cBorderStyle} />

      <div className='flex items-center'>
        <button
          onClick={handleCloseWindow}
          className='mr-2 bg-bg group-hover:bg-green group-focus:bg-green font-bold rounded-full w-3 h-3'
        ></button>
        <button
          onClick={handleCloseWindow}
          className='mr-2 bg-bg group-hover:bg-yellow group-focus:bg-yellow font-bold rounded-full w-3 h-3'
        ></button>
        <button
          onClick={handleCloseWindow}
          className='mr-2 bg-bg group-hover:bg-red group-focus:bg-red font-bold rounded-full w-3 h-3'
        ></button>
      </div>
    </div>
  )
}

export default MenuBar
