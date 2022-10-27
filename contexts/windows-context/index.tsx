import type { Dispatch, SetStateAction } from 'react'
import { createContext, useState } from 'react'

type Props = {
  children: JSX.Element
}

type defaultValue = {
  windows: Array<Object>
  setWindows?: Dispatch<SetStateAction<never[]>>
  test?: String
}

export const WindowsContext = createContext({
  windows: [],
} as defaultValue)

export const WindowsProvider = ({ children }: Props) => {
  const [windows, setWindows] = useState([])
  const test = 'hello'
  return (
    <WindowsContext.Provider value={{ windows, setWindows, test }}>
      {children}
    </WindowsContext.Provider>
  )
}
