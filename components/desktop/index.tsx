import DesktopItem from '../desktop-item'

const Desktop = () => {
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
      {items.map((item) => {
        return <DesktopItem item={item} />
      })}
    </div>
  )
}

export default Desktop
