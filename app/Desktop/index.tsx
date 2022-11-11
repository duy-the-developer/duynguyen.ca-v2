'use client'

import { useContext } from 'react'
import { WindowsContext } from '../../src/contexts/WindowsContext'
// components
import Shortcuts from './Shortcuts'
import TaskBar from './TaskBar'
import WindowsManager from './WindowsManager'

const Desktop = ({ allShortcuts }: { allShortcuts: [] | string[] | false }) => {
  const thumbNails =
    allShortcuts &&
    allShortcuts.map((element, index) => {
      return <Shortcuts name={element} key={`thumb-${index}`} />
    })

  return (
    <div className='relative flex flex-col gap-3 w-full h-full bg-bg text-fg dark:bg-dbg dark:text-dfg pt-3'>
      <WindowsManager />
      {thumbNails}
      <TaskBar />
    </div>
  )
}

export default Desktop
