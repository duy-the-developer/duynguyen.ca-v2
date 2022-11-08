'use client'

// Modules
import { useState } from 'react'
import { format } from 'date-fns'

// Components
import TabArrow from '../../common/TabArrow'

export default () => {
  const [today, setToday] = useState<Date | null>(new Date())

  setInterval(() => {
    setToday(new Date())
  }, 1000)

  return (
    <div className='flex flex-nowrap'>
      <TabArrow style='border-r-orange dark:border-r-lorange' />
      <div className='flex flex-nowrap bg-orange pl-4 dark:bg-lorange'>
        <span className='whitespace-nowrap'>
          {today && format(today, 'PPP')}
        </span>
        <TabArrow style='border-r-dorange dark:border-r-orange' />

        <div className='px-4 bg-dorange dark:bg-orange'>
          <span className='whitespace-nowrap'>
            {today && format(today, 'pp')}
          </span>
        </div>
      </div>
    </div>
  )
}
