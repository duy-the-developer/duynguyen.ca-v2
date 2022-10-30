export type TWindowProviderProps = {
  children: JSX.Element
}

export type TItem = {
  name: string
  type: string
  defaultW: string
  defaultH: string
}

export type TWindowsContext = {
  windowsArr: TItem[] | []
  updateWindowsArr: (item: TItem) => void
  removeWindow: (name: string, index: number) => void
}
