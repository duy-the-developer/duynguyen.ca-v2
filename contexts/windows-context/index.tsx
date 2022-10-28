import { createContext, useState, useContext } from 'react'

type Props = {
  children: JSX.Element
}

type TWindowsContext = {
  windows: Object[]
  updateWindows: (item: Object) => void
}

const defaultWindowsContext: TWindowsContext = {
  windows: [],
  updateWindows: () => {},
}

const WindowsContext = createContext(defaultWindowsContext)

export const useWindowsContext = () => {
  return useContext(WindowsContext)
}

export const WindowsProvider = ({ children }: Props) => {
  const [windows, setWindows] = useState<Object[]>([])
  const updateWindows = (item: Object) => {
    setWindows((state) => [...state, item])
  }

  return (
    <WindowsContext.Provider value={{ windows, updateWindows }}>
      {children}
    </WindowsContext.Provider>
  )
}

export default useWindowsContext
