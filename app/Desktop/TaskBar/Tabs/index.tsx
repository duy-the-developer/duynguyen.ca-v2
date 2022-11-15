import TabArrow from '../../../../src/components/common/TabArrow'
import { useContext } from 'react'
import { WindowsContext } from '../../../../src/contexts/WindowsContext'
import StartButton from '../StartButton'

export const NestTabs = ({
  index,
  openWindows,
}: {
  index: number
  openWindows: string[]
}) => {
  const name = openWindows[index]
  const isFile = name?.includes('.md')
  const isEmpty = openWindows.length == 0

  return (
    <>
      <div
        className={`flex pr-4 ${isFile ? 'bg-aqua' : 'bg-yellow'} ${
          isEmpty && 'bg-transparent'
        }`}
      >
        {openWindows.includes('') &&
          openWindows.filter((name) => name !== '').indexOf(name) === 0 && (
            <StartButton />
          )}
        {index === 0 && <StartButton />}
        {openWindows.length !== 0 && openWindows[index - 1] && (
          <NestTabs index={index - 1} openWindows={openWindows} />
        )}
        {openWindows[index]}
      </div>
      {openWindows.length !== 0 && (
        <TabArrow style={`${isFile ? 'border-l-aqua' : 'border-l-yellow'}`} />
      )}
    </>
  )
}

const Tabs = () => {
  const { openWindows } = useContext(WindowsContext)

  return (
    <div className='flex items-center' id='tab-wrapper'>
      <NestTabs
        index={openWindows.length === 0 ? 0 : openWindows.length - 1}
        openWindows={openWindows}
      />
    </div>
  )
}

export default Tabs
