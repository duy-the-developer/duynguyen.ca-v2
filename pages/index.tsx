import Desktop from '../components/desktop'
import TaskBar from '../components/taskbar/index'

const App = () => {
  return (
    <div className='dark flex h-screen w-screen flex-col'>
      <Desktop />
      <TaskBar />
    </div>
  )
}

export default App
