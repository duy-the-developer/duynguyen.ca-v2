// REACT-ICONS
import TabArrow from '../tab-arrow'

const StartButton = () => {
  return (
    <div className='flex items-center'>
      <div className='flex bg-blue pr-4'>
        <div className='flex bg-aqua pr-4'>
          <button className='bg-dorange px-4 font-bold text-fg dark:bg-orange'>
            START
          </button>
          <TabArrow style='border-l-dorange dark:border-l-orange' />
          README.txt
        </div>
        <div className='border-transparent border-solid border-[12px] border-l-aqua '></div>
        about.txt
      </div>
      <TabArrow style='border-l-blue' />
    </div>
  )
}

export default StartButton
