// Types
import type { MouseEvent } from 'react'

// Modules

import TabArrow from '../../common/TabArrow'

type Props = {
  name: string
  index: number
}

export default ({ name }: Props) => {
  const handleCloseWindow = (e: MouseEvent<HTMLButtonElement>) => {}

  return (
    <div className='rounded-t-lg flex items-center justify-between bg-dgray dark:bg-dgray dark:text-fg select-none'>
      <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center bg-aqua w-fit px-4 align-center'>
          {name}
        </div>
        <TabArrow style='border-l-aqua ' />
      </div>
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
  )
}
