import { createContext, useState, useContext } from 'react'

import { TWindowProviderProps, TWindowsContext, TItem } from '../../types/type'

const defaultWindowsContext: TWindowsContext = {
  windowsArr: [],
  updateWindowsArr: () => {},
  removeWindow: () => {},
}

const WindowsContext = createContext(defaultWindowsContext)

export const useWindowsContext = () => {
  return useContext(WindowsContext)
}

export const WindowsProvider = ({ children }: TWindowProviderProps) => {
  const [windowsArr, setWindowsArr] = useState<TItem[]>([])

  const updateWindowsArr = (item: TItem) => {
    if (!windowsArr.includes(item)) {
      setWindowsArr((state) => [...state, item])
    }
  }

  const removeWindow = (name: string, index: number) => {
    setWindowsArr((state) => state.filter((element) => element.name !== name))
  }

  return (
    <WindowsContext.Provider
      value={{ windowsArr, updateWindowsArr, removeWindow }}
    >
      {children}
    </WindowsContext.Provider>
  )
}

export default useWindowsContext
