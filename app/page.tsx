import '../styles/globals.css'

import Desktop from './Desktop/page'
import TaskBar from './Desktop/TaskBar/page'

// data
import useGetAllShortcuts from './hooks/useGetAllShortcuts'

export default function App() {
  const allShortCuts = useGetAllShortcuts('type')
  return (
    <div className='overflow-hidden dark h-screen w-screen max-w-[100vw] max-h-[100vh]'>
      <Desktop allShortcuts={allShortCuts} />
    </div>
  )
}
