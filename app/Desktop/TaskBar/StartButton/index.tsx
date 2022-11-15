import type { MouseEvent } from 'react'
import TabArrow from '../../../../src/components/common/TabArrow'

const StartButton = () => {
  const handleClick = (e: MouseEvent<HTMLButtonElement | MouseEvent>) => {
    e.stopPropagation()
    console.log('Start')
  }

  return (
    <>
      <button
        onClick={handleClick}
        className='bg-dorange px-4 font-bold dark:bg-orange'
      >
        START
      </button>
      <TabArrow style='border-l-dorange dark:border-l-orange' />
    </>
  )
}

export default StartButton
