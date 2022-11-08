'use client'
// Types
import type { MouseEvent } from 'react'

// icons
import { MdInsertDriveFile, MdFolder } from 'react-icons/md'
import Draggable from 'react-draggable'

// contexts

export default ({ name }: { name: string }) => {
  const isFile = name.includes('.')
  const handleDoubleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <Draggable>
      <button
        onDoubleClick={handleDoubleClick}
        className='w-28 flex flex-col items-center focus:bg-lblue hover:bg-laqua cursor-default dark:focus:bg-blue dark:hover:bg-aqua'
      >
        {isFile && <MdInsertDriveFile className='h-10 w-10' />}
        {!isFile && <MdFolder className='h-10 w-10 text-yellow' />}
        <div>{name}</div>
      </button>
    </Draggable>
  )
}
