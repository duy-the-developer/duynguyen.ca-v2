'use client'

// Modules
import { useState, memo } from 'react'
import Draggable from 'react-draggable'

// Components
import MenuBar from './MenuBar'
import WindowContent from './WindowContent'

// Types

type TProps = {
  name: string
  index: number
  removeWindow: (windowToRemove: string, index: number) => void
}

export default memo(({ name, index, removeWindow }: TProps) => {
  const [isHidden, setIsHidden] = useState(false)

  if (!name) {
    return <div className='hidden'></div>
  }

  return (
    <Draggable>
      <div
        tabIndex={index}
        className={`${
          isHidden ? 'hidden' : 'absolute'
        } group rounded-t-md cursor-default top-3 right-3 text-left`}
      >
        <MenuBar name={name} index={index} removeWindow={removeWindow} />
        <WindowContent />
      </div>
    </Draggable>
  )
})
