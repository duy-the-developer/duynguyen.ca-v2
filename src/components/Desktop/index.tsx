// api requests
import { TItem } from '../../types/type'

// data
import getAllShortcuts from './fetches/getAllShortcuts'

// components
import DesktopIcon from './Shortcuts/Shortcuts'
import WindowDisplay from '../Window'

export default () => {
  const allShortcuts = getAllShortcuts('type')
  const thumbNails =
    allShortcuts &&
    allShortcuts.map((element, index) => {
      return <DesktopIcon name={element} key={`thumb-${index}`} />
    })

  // const windowsDisplay = allShortcuts.map((element, index) => {
  //   if (index === 0) {
  //     return (
  //       <WindowDisplay item={element} index={index} key={`window-${index}`} />
  //     )
  //   }
  // })

  return (
    <div className='relative flex flex-col gap-3 w-full h-full bg-bg text-fg dark:bg-dbg dark:text-dfg pt-3'>
      {/* {windowsDisplay} */}
      {thumbNails}
    </div>
  )
}
