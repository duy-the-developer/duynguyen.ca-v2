'use client'

// Modules
import { useState, memo } from 'react'
import Draggable from 'react-draggable'

// Components
import MenuBar from './MenuBar/page'
import FileContent from './FileContent/page'
import FolderContent from './FolderContent/page'

// Types

type TProps = {
  name: string
  index: number
  removeWindow: (windowToRemove: string, index: number) => void
}

export default memo(({ name, index, removeWindow }: TProps) => {
  const isFile = name.includes('.md')
  const isFolder = !name.includes('.md')
  const [isHidden, setIsHidden] = useState(false)
  const [disableDrag, setDisableDrag] = useState(true)

  if (!name) {
    return <div className='hidden'></div>
  }

  return (
    <Draggable disabled={disableDrag}>
      <div
        tabIndex={index}
        className={`${
          isHidden ? 'hidden' : 'absolute'
        } mr-3 w-fit z-10 focus:z-20 group rounded-t-md cursor-default top-3 left-1/3 text-left`}
      >
        <MenuBar
          cColor={isFile ? 'aqua' : 'yellow'}
          name={name}
          index={index}
          removeWindow={removeWindow}
          setDisableDrag={setDisableDrag}
        />
        {isFile && <FileContent name={name} />}
        {!isFile && <FolderContent path={name} />}
      </div>
    </Draggable>
  )
})
