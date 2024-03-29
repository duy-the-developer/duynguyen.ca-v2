'use client'

// Modules
import { useEffect, useState } from 'react'
import { format } from 'date-fns'

// Components
import TabArrow from '../../../../src/components/common/TabArrow'

const Clock = () => {
  const [today, setToday] = useState<Date | null>(null)

  useEffect(() => {
    const clock = setInterval(() => {
      setToday((prevDate) => {
        prevDate = new Date()
        return prevDate
      })
    }, 1000)
    return () => clearInterval(clock)
  }, [])

  return (
    <div className='flex flex-nowrap'>
      <TabArrow style='border-r-orange dark:border-r-lorange' />
      <div className='flex flex-nowrap bg-orange pl-4 dark:bg-lorange'>
        <span className='whitespace-nowrap'>
          {today && format(today, 'PPP')}
          {!today && 'Loading...'}
        </span>
        <TabArrow style='border-r-dorange dark:border-r-orange' />

        <div className='px-4 bg-dorange dark:bg-orange'>
          <span className='whitespace-nowrap'>
            {today && format(today, 'pp')}
            {!today && 'Loading...'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Clock
