// Modules
import { useState, useEffect } from 'react'
import { format } from 'date-fns'

// Components
import TabArrow from '../tab-arrow'

const Clock = () => {
  const [today, setToday] = useState<Date | null>(null)

  setInterval(() => {
    setToday(new Date())
  }, 1000)

  useEffect(() => {
    setToday(new Date())
  }, [])

  return (
    <div className='flex'>
      <TabArrow style='border-r-orange dark:border-r-lorange' />
      <div className='flex bg-orange pl-4 dark:bg-lorange'>
        {today && format(today, 'PPP')}
        <TabArrow style='border-r-dorange dark:border-r-orange' />

        <div className='px-4 bg-dorange dark:bg-orange'>
          {today && format(today, 'pp')}
        </div>
      </div>
    </div>
  )
}

export default Clock
