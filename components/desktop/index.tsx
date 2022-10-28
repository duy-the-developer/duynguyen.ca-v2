import useWindowsContext from '../../contexts/windows-context'
import DesktopIcon from '../desktop-icon'

const itemsArray = [
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

const Desktop = () => {
  const { windows, updateWindows } = useWindowsContext()
  const thumbNails = itemsArray.map((item, index) => {
    return <DesktopIcon item={item} key={`item-${index}`} />
  })

  return (
    <div className='flex flex-col gap-3 w-full h-full bg-bg text-fg dark:bg-dbg dark:text-dfg pt-3'>
      {thumbNails}
    </div>
  )
}

export default Desktop
