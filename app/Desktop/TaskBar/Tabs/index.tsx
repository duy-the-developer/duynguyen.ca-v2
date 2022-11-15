import TabArrow from '../../../../src/components/common/TabArrow'
import { useContext, memo, useState, useEffect } from 'react'
import { WindowsContext } from '../../../../src/contexts/WindowsContext'
import StartButton from '../StartButton'

export const NestTabs = ({ index }: { index: number }) => {
  const { openWindows } = useContext(WindowsContext)
  const name = openWindows[index]
  const isFile = name?.includes('.md')
  const isEmpty = openWindows.length === 0

  return (
    <>
      <div
        id={name}
        className={`flex pr-4 ${isFile ? 'bg-aqua' : 'bg-yellow'} ${
          !name && 'bg-transparent pr-0'
        }`}
      >
        {/* {openWindows.includes('') &&
          openWindows.filter((name: string) => name !== '').indexOf(name) ===
            0 && <StartButton />} */}
        {index === 0 && <StartButton />}
        {!isEmpty && index > 0 && <NestTabs index={index - 1} />}
        {name}
      </div>
      {!isEmpty && (
        <TabArrow
          style={`${isFile ? 'border-l-aqua' : 'border-l-yellow'} ${
            !name && 'hidden'
          }`}
        />
      )}
    </>
  )
}

const Tabs = () => {
  const { openWindows } = useContext(WindowsContext)
  return (
    <div className='flex items-center' id='tab-wrapper'>
      <NestTabs index={openWindows.length === 0 ? 0 : openWindows.length - 1} />
    </div>
  )
}

export default Tabs
