export type TWindowProviderProps = {
  children: JSX.Element
}

export type TItem = {
  name: string
  type: string
  position: {
    defaultT: number | null
    defaultR: number | null
  }
}

export type TWindowsContext = {
  windowsArr: TItem[] | []
  updateWindowsArr: (item: TItem, index: number) => void
  removeWindow: (name: string, index: number) => void
}
