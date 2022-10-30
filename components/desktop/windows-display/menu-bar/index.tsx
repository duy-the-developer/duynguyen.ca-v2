// Types
import type { Dispatch, SetStateAction, PointerEvent, MouseEvent } from 'react'

// Modules

import useWindowsContext from '../../../../contexts/windows-context'
import TabArrow from '../../../taskbar/tab-arrow'

type Props = {
  setIsHidden: Dispatch<SetStateAction<boolean>>
  setIsDragging: Dispatch<SetStateAction<boolean>>
  handleDrag: (e: PointerEvent<HTMLDivElement>) => void
  name: string
  index: number
}

const MenuBar = ({
  setIsHidden,
  setIsDragging,
  handleDrag,
  name,
  index,
}: Props) => {
  const { windowsArr, removeWindow } = useWindowsContext()

  const handleCloseWindow = (e: MouseEvent<HTMLButtonElement>) => {
    removeWindow(name, index)
  }

  return (
    <div
      onPointerDown={() => {
        setIsDragging(true)
      }}
      onPointerUp={() => {
        setIsDragging(false)
      }}
      onPointerMove={(e) => {
        handleDrag(e)
      }}
      className='flex items-center justify-between bg-gray dark:bg-dgray dark:text-fg select-none'
    >
      <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center bg-aqua w-fit px-4 align-center'>
          {name}
        </div>
        <TabArrow style='border-l-aqua ' />
      </div>
      <div className='flex'>
        <TabArrow style='border-r-dred dark:border-r-red' />
        <button
          onClick={handleCloseWindow}
          className='bg-dred px-4 dark:bg-red font-bold'
        >
          X
        </button>
      </div>
    </div>
  )
}

export default MenuBar
