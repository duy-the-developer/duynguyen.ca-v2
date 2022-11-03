'use client'

// Types
import type { PointerEvent } from 'react'
import { TItem } from '../../types/type'

// Modules
import { useState, memo } from 'react'

// Components
import MenuBar from './MenuBar'
import WindowContent from './WindowContent'

export default memo(({ item, index }: { item: TItem; index: number }) => {
  const { name } = item

  const [position, setPosition] = useState({ top: 10, right: 10 })

  const [isDragging, setIsDragging] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  const handleDrag = (e: PointerEvent<HTMLDivElement>) => {
    console.log(isDragging)
    if (isDragging) {
      console.log(e.clientX)
      console.log(e.clientY)
    }
  }

  return (
    <div
      className={`${isHidden ? 'hidden' : 'absolute'}  cursor-default`}
      style={{ top: `${position.top}px`, right: `${position.right}px` }}
    >
      <MenuBar
        setIsHidden={setIsHidden}
        setIsDragging={setIsDragging}
        handleDrag={handleDrag}
        name={name}
        index={index}
      />
      <WindowContent />
    </div>
  )
})
