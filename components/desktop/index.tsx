import { useContext } from 'react'

import { WindowsContext } from '../../contexts/windows-context'
import DesktopItem from '../desktop-item'

const Desktop = () => {
  const { windows, setWindows, test } = useContext(WindowsContext)
  console.log(test)
  const items = [
    {
      name: 'README.txt',
      type: 'file',
    },
    {
      name: 'about.txt',
      type: 'file',
    },
    {
      name: 'contact.txt',
      type: 'file',
    },
    {
      name: 'projects',
      type: 'folder',
    },
  ]
  return (
    <div className='flex flex-col gap-3 w-full h-full bg-bg text-fg dark:bg-dbg dark:text-dfg pt-3'>
      {items.map((item, index) => {
        return <DesktopItem item={item} key={`item-${index}`} />
      })}
    </div>
  )
}

export default Desktop
