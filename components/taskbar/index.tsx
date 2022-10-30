import StartButton from './start-button'
import Clock from './clock'

const TaskBar = () => {
  return (
    <div className='select-none bg-dgray dark:bg-d-gray dark:text-dbg flex justify-between'>
      <StartButton />
      <Clock />
    </div>
  )
}

export default TaskBar
