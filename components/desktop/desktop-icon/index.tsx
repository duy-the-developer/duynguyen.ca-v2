// Types
import type { MouseEvent } from 'react'
import { TItem } from '../../../types/type'

// icons
import { MdInsertDriveFile, MdFolder } from 'react-icons/md'

// contexts
import { useWindowsContext } from '../../../contexts/windows-context'

const DesktopIcon = ({ item }: { item: TItem }) => {
  const { windowsArr, updateWindowsArr } = useWindowsContext()
  const { name, type } = item

  const handleDoubleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    updateWindowsArr(item)
  }

  return (
    <button
      onDoubleClick={handleDoubleClick}
      className='w-28 flex flex-col items-center focus:bg-lblue hover:bg-laqua cursor-default dark:focus:bg-blue dark:hover:bg-aqua'
    >
      {type === 'file' && <MdInsertDriveFile className='h-10 w-10' />}
      {type === 'folder' && <MdFolder className='h-10 w-10 text-yellow' />}
      <div>{name}</div>
    </button>
  )
}

export default DesktopIcon
