'use client'

// Types
import { TItem } from '../../types/type'

// Modules
import { useState, memo } from 'react'
import Draggable from 'react-draggable'

// Components
import MenuBar from './MenuBar'
import WindowContent from './WindowContent'

export default memo(({ item, index }: { item: TItem; index: number }) => {
  const { name } = item

  const [isHidden, setIsHidden] = useState(false)

  return (
    <Draggable>
      <div
        className={`${
          isHidden ? 'hidden' : 'absolute'
        } group rounded-t-md cursor-default top-3 right-3 text-left`}
      >
        <MenuBar name={name} index={index} />
        <WindowContent />
      </div>
    </Draggable>
  )
})
