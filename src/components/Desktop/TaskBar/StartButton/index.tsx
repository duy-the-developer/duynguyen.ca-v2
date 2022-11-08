import TabArrow from '../../../common/TabArrow'

export default () => {
  return (
    <div className='flex items-center'>
      <div className='flex bg-blue pr-4'>
        <div className='flex bg-aqua pr-4'>
          <button className='bg-dorange px-4 font-bold dark:bg-orange'>
            START
          </button>
          <TabArrow style='border-l-dorange dark:border-l-orange' />
          README.txt
        </div>
        <TabArrow style='border-l-aqua' />
        about.txt
      </div>
      <TabArrow style='border-l-blue' />
    </div>
  )
}
