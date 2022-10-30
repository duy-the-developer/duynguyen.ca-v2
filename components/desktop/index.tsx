// contexts
import { defaultHead } from 'next/head'
import useWindowsContext from '../../contexts/windows-context'

// components
import DesktopIcon from './desktop-icon'
import WindowDisplay from './windows-display'

const itemsArray = [
  {
    name: 'README.txt',
    type: 'file',
    defaultW: '60vw',
    defaultH: '80vh',
  },
  {
    name: 'about.txt',
    type: 'file',
    defaultW: '60vw',
    defaultH: '80vh',
  },
  {
    name: 'contact.txt',
    type: 'file',
    defaultW: '60vw',
    defaultH: '80vh',
  },
  {
    name: 'projects',
    type: 'folder',
    defaultW: '60vw',
    defaultH: '80vh',
  },
]

const Desktop = () => {
  const { windowsArr, updateWindowsArr } = useWindowsContext()

  const thumbNails = itemsArray.map((element, index) => {
    return <DesktopIcon item={element} key={`thumb-${index}`} />
  })

  const windowsDisplay = windowsArr.map((element, index) => {
    return (
      <WindowDisplay item={element} index={index} key={`window-${index}`} />
    )
  })

  return (
    <div className='relative flex flex-col gap-3 w-full h-full bg-bg text-fg dark:bg-dbg dark:text-dfg pt-3'>
      {windowsDisplay}
      {thumbNails}
    </div>
  )
}

export default Desktop
