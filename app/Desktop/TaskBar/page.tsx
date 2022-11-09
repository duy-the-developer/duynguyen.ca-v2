import StartButton from './StartButton/page'
import Clock from './Clock/page'

export default () => {
  return (
    <div className='absolute bottom-0 left-0 right-0 select-none bg-dgray dark:bg-d-gray dark:text-dbg flex justify-between min-w-screen-md'>
      <StartButton />
      <Clock />
    </div>
  )
}
