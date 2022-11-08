import { useCallback, useState } from 'react'

export default () => {
  const [openWindows, setOpenWindows] = useState<[] | string[]>([])

  const addWindow = useCallback((newWindow: string) => {
    setOpenWindows((state) => [...state, newWindow])
  }, [])

  const removeWindow = (windowToRemove: string, index: number) => {
    if (index < openWindows.length - 1) {
      setOpenWindows((state) =>
        state.map((window) => (window === windowToRemove ? '' : window))
      )
      return
    } else {
      setOpenWindows((state) => {
        const newState = state.filter((window) => window !== windowToRemove)
        if (newState.every((window) => window === '')) {
          return []
        }
        return newState
      })
    }
  }

  return { openWindows, addWindow, removeWindow }
}
