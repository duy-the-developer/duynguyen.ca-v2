import '../styles/globals.css'

// modules
import Desktop from './Desktop'

// contexts
import { WindowsProvider } from '../src/contexts/WindowsContext'

// static data
import useGetAllShortcuts from './hooks/useGetAllShortcuts'

export default function App() {
  const allShortCuts = useGetAllShortcuts('type')
  return (
    <div className='overflow-hidden dark h-screen w-screen max-w-[100vw] max-h-[100vh]'>
      <WindowsProvider>
        <Desktop allShortcuts={allShortCuts} />
      </WindowsProvider>
    </div>
  )
}
