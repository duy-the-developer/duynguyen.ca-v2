import { MdInsertDriveFile, MdFolder } from 'react-icons/md'

type DesktopItem = {
  name: string
  type: string
}

const DesktopItem = ({ item }: { item: DesktopItem }) => {
  const { name, type } = item
  return (
    <button className='w-28 flex flex-col items-center hover:bg-red'>
      {type === 'file' && <MdInsertDriveFile className='h-10 w-10' />}
      {type === 'folder' && <MdFolder className='h-10 w-10' />}
      <div>{name}</div>
    </button>
  )
}

export default DesktopItem
