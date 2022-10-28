import StartButton from './start-button'
import Clock from './clock'

const TaskBar = () => {
  return (
    <div className='bg-dgray dark:bg-d-gray dark:text-dbg flex justify-between font-bold'>
      <StartButton />
      <Clock />
    </div>
  )
}

export default TaskBar
