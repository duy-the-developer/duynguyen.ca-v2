'use client'
import React, { useCallback, useState, createContext } from 'react'
import type { ReactNode } from 'react'

export const WindowsContext = createContext<any | []>([])

export const WindowsProvider = ({ children }: { children: ReactNode }) => {
  const [openWindows, setOpenWindows] = useState<string[]>([])

  const addWindow = useCallback((newWindow: string) => {
    setOpenWindows((state) => [...state, newWindow])
  }, [])

  const removeWindow = (windowToRemove: string, targetIndex: number) => {
    if (targetIndex < openWindows.length - 1) {
      setOpenWindows((state) => {
        let newState = state.map((window, index) =>
          index === targetIndex ? '' : window
        )
        if (newState.every((window) => window === '')) {
          newState = []
        }
        return newState
      })
      return
    } else {
      setOpenWindows((state) => {
        let newState = state.filter((window, index) => index !== targetIndex)

        if (newState.every((window) => window === '')) {
          newState = []
        }
        return newState
      })
    }
  }

  return (
    <WindowsContext.Provider value={{ openWindows, addWindow, removeWindow }}>
      {children}
    </WindowsContext.Provider>
  )
}
