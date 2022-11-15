import TabArrow from '../../../../src/components/common/TabArrow'
import { useContext, memo, useState, useEffect } from 'react'
import { WindowsContext } from '../../../../src/contexts/WindowsContext'
import StartButton from '../StartButton'

export const NestTabs = ({
  index,
  openWindows,
}: {
  index: number
  openWindows: string[]
}) => {
  const [name, setName] = useState(openWindows[index])
  const isFile = name?.includes('.md')
  const [isEmpty, setIsEmpty] = useState(openWindows.length == 0)

  console.log(openWindows)

  useEffect(() => {
    setName((prevState) => {
      prevState = openWindows[index]
      return prevState
    })
    setIsEmpty(openWindows.length == 0)
  }, [openWindows.length])

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
        {openWindows.length !== 0 && index > 0 && (
          <NestTabs
            index={index - 1}
            openWindows={openWindows.filter((name: string) => name !== '')}
          />
        )}
        {name}
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
        openWindows={openWindows.filter((name: string) => name !== '')}
      />
    </div>
  )
}

export default Tabs
