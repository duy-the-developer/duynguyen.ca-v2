// modules
import type { MouseEvent } from 'react'
import { useContext } from 'react'

// icons
import { MdInsertDriveFile, MdFolder } from 'react-icons/md'

// contexts
import { useWindowsContext } from '../../contexts/windows-context'

type Item = {
  name: string
  type: string
}

const DesktopIcon = ({ item }: { item: Item }) => {
  const { windows, updateWindows } = useWindowsContext()
  const { name, type } = item

  console.log(windows)

  const handleDoubleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    updateWindows(item)
  }

  return (
    <button
      onDoubleClick={handleDoubleClick}
      className='w-28 flex flex-col items-center focus:bg-blue hover:bg-aqua'
    >
      {type === 'file' && <MdInsertDriveFile className='h-10 w-10' />}
      {type === 'folder' && <MdFolder className='h-10 w-10 text-yellow' />}
      <div>{name}</div>
    </button>
  )
}

export default DesktopIcon
