import StartButton from './start-button';
import Clock from './clock';

const TaskBar = () => {
  return (
    <div className='bg-dgray dark:bg-d-gray dark:text-d-fg flex justify-between'>
      <StartButton />
      <Clock />
    </div>
  );
};

export default TaskBar;
