import '../styles/globals.css'

import Desktop from './Desktop'
import TaskBar from './Desktop/TaskBar'

// data
import useGetAllShortcuts from './hooks/useGetAllShortcuts'

export default function App() {
  const allShortCuts = useGetAllShortcuts('type')
  return (
    <div className='dark h-screen w-screen max-w-[100vw] max-h-[100vh]'>
      <Desktop allShortcuts={allShortCuts} />
    </div>
  )
}
