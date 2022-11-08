import '../styles/globals.css'

import Desktop from '../src/components/Desktop'
import TaskBar from '../src/components/TaskBar'

// data
import getAllShortcuts from './fetches/getAllShortcuts'

export default function App() {
  const allShortCuts = getAllShortcuts('type')
  return (
    <div className='dark h-screen w-screen max-w-[100vw] max-h-[100vh]'>
      <Desktop allShortcuts={allShortCuts} />
    </div>
  )
}
