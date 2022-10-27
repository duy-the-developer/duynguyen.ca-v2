import { useEffect, useState } from 'react'

import TabArrow from '../tab-arrow'

const Clock = () => {
  const [today, setToday] = useState(new Date())
  let hours = today.getHours()
  let minutes =
    today.getMinutes() > 9 ? today.getMinutes() : `0${today.getMinutes()}`
  let seconds =
    today.getSeconds() > 9 ? today.getSeconds() : `0${today.getSeconds()}`

  const updateTime = () => {
    setInterval(() => {
      setToday(new Date())
    }, 1000)
  }

  useEffect(updateTime, [])

  return (
    <div className='flex'>
      <TabArrow style='border-r-orange dark:border-r-lorange' />
      <div className='flex bg-orange pl-4 dark:bg-lorange'>
        {today.toLocaleDateString()}
        <TabArrow style='border-r-dorange dark:border-r-orange' />
        <div className='px-4 bg-dorange dark:bg-orange'>{`${hours}:${minutes}:${seconds}`}</div>
      </div>
    </div>
  )
}

export default Clock
