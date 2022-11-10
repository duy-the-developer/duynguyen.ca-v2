'use client'
// components
import Shortcuts from './Shortcuts'
import WindowDisplay from './Window'
import TaskBar from './TaskBar'
import useOpenWindows from './hooks/useOpenWindows'
import { useEffect } from 'react'

const Desktop = ({ allShortcuts }: { allShortcuts: [] | string[] | false }) => {
  const { openWindows, addWindow, removeWindow } = useOpenWindows()

  useEffect(() => {
    addWindow('_README.md')
  }, [])

  const thumbNails =
    allShortcuts &&
    allShortcuts.map((element, index) => {
      return (
        <Shortcuts
          name={element}
          key={`thumb-${index}`}
          addWindow={addWindow}
        />
      )
    })

  const windowsDisplay = openWindows.map((element: string, index: number) => {
    return (
      <WindowDisplay
        name={element}
        index={index}
        key={`window-${index}`}
        removeWindow={removeWindow}
      />
    )
  })

  return (
    <div className='relative flex flex-col gap-3 w-full h-full bg-bg text-fg dark:bg-dbg dark:text-dfg pt-3'>
      {windowsDisplay}
      {thumbNails}
      <TaskBar />
    </div>
  )
}

export default Desktop