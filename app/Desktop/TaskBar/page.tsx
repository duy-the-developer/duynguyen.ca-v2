import StartButton from './StartButton/page'
import Clock from './Clock/page'

const TaskBar = () => {
  return (
    <div className='absolute bottom-0 left-0 right-0 select-none bg-dgray dark:bg-d-gray dark:text-dbg flex justify-between min-w-screen-md'>
      <StartButton />
      <Clock />
    </div>
  )
}


export default TaskBar
