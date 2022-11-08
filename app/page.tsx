import '../styles/globals.css'

import Desktop from '../src/components/Desktop'
import TaskBar from '../src/components/TaskBar'

export default function App() {
  return (
    <div className='dark h-screen w-screen max-w-[100vw] max-h-[100vh]'>
      <Desktop />
      <TaskBar />
    </div>
  )
}
