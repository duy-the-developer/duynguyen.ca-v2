import { useEffect, useState } from 'react'

import TabArrow from '../tab-arrow'

const Clock = () => {
  const [today, setToday] = useState(new Date())
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  setInterval(() => {
    setToday(new Date())
  }, 1000)

  const updateTime = () => {
    const h = today.getHours()
    const m = today.getMinutes()
    const s = today.getSeconds()

    // format time so if time < 10 add 0 in front
    setHours(h > 9 ? h.toString() : `0${h}`)
    setMinutes(m > 9 ? m.toString() : `0${m}`)
    setSeconds(s > 9 ? s.toString() : `0${s}`)
  }

  useEffect(updateTime, [today])

  return (
    <div className='flex'>
      <TabArrow style='border-r-orange dark:border-r-lorange' />
      <div className='flex bg-orange pl-4 dark:bg-lorange'>
        {today.toLocaleDateString()}
        <TabArrow style='border-r-dorange dark:border-r-orange' />
        {seconds && (
          <div className='px-4 bg-dorange dark:bg-orange'>{`${hours}:${minutes}:${seconds}`}</div>
        )}
      </div>
    </div>
  )
}

export default Clock
