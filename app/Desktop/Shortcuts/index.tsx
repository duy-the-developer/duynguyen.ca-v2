'use client'
// modules
import { memo } from 'react'

// icons
import { MdInsertDriveFile, MdFolder } from 'react-icons/md'
import Draggable from 'react-draggable'

// contexts

// Types
import type { MouseEvent } from 'react'
type TProps = {
  name: string
  addWindow: (newWindow: string) => void
}

const Shortcuts = memo(({ name, addWindow }: TProps) => {
  const isFile = name.includes('.')

  const handleDoubleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addWindow(name)
  }

  return (
    <Draggable>
      <button
        onDoubleClick={handleDoubleClick}
        className='w-28 flex flex-col items-center focus:bg-lblue hover:bg-laqua dark:focus:bg-blue dark:hover:bg-aqua'
      >
        {isFile && <MdInsertDriveFile className='h-10 w-10' />}
        {!isFile && <MdFolder className='h-10 w-10 text-yellow' />}
        <div>{name}</div>
      </button>
    </Draggable>
  )
})

export default Shortcuts
