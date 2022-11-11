'use client'

// modules
import Window from '../Window'

// contexts
import { useContext } from 'react'
import { WindowsContext } from '../../../src/contexts/WindowsContext'

const WindowsManager = () => {
  const { openWindows, removeWindow } = useContext(WindowsContext)

  return (
    <>
      {openWindows.map((window: string, index: number) => {
        return (
          <Window
            name={window}
            index={index}
            key={`window-${index}`}
            removeWindow={removeWindow}
          />
        )
      })}
    </>
  )
}

export default WindowsManager
