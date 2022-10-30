// Types
import type { PointerEvent, MouseEvent } from 'react'
import { TItem } from '../../../types/type'

// Modules
import { useState, useEffect, useRef } from 'react'

// Components
import MenuBar from './menu-bar'

const WindowDisplay = ({ item, index }: { item: TItem; index: number }) => {
  const position = useRef({ top: index * 25, right: index * 25 })

  const [isDragging, setIsDragging] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  const { name, type, defaultH, defaultW } = item

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
      style={{
        width: defaultW,
        height: defaultH,
        top: `${position.current.top}px`,
        right: `${position.current.right}px`,
      }}
    >
      <MenuBar
        setIsHidden={setIsHidden}
        setIsDragging={setIsDragging}
        handleDrag={handleDrag}
        name={name}
        index={index}
      />
      <div className='border-2 border-t-0 border-solid border-gray w-full h-full'></div>
    </div>
  )
}

export default WindowDisplay
