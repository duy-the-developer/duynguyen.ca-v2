import { join } from 'path'
import fs from 'fs'

const useGetAllShortcuts = (sortOption: string) => {
  let result: string[] | [] | false = []
  const postsDir = join(process.cwd(), '_data')

  const sortByType = (fileName1: string, fileName2: string) => {
    const value1 = fileName1.includes('.') ? 0 : 1
    const value2 = fileName2.includes('.') ? 0 : 1
    return value1 - value2
  }

  result = sortOption === 'type' && fs.readdirSync(postsDir).sort(sortByType)

  return result
}

export default useGetAllShortcuts
