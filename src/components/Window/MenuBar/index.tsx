// Types
import type { Dispatch, SetStateAction, PointerEvent, MouseEvent } from 'react'

// Modules

import TabArrow from '../../common/TabArrow'

type Props = {
  setIsHidden: Dispatch<SetStateAction<boolean>>
  setIsDragging: Dispatch<SetStateAction<boolean>>
  handleDrag: (e: PointerEvent<HTMLDivElement>) => void
  name: string
  index: number
}

export default ({
  setIsHidden,
  setIsDragging,
  handleDrag,
  name,
  index,
}: Props) => {
  const handleCloseWindow = (e: MouseEvent<HTMLButtonElement>) => {}

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
      className='flex items-center justify-between bg-dgray dark:bg-dgray dark:text-fg select-none'
    >
      <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center bg-aqua w-fit px-4 align-center'>
          {name}
        </div>
        <TabArrow style='border-l-aqua ' />
      </div>
      <button
        onClick={handleCloseWindow}
        className='bg-dred px-3 dark:bg-red font-bold'
      >
        X
      </button>
    </div>
  )
}
