import { NextApiRequest, NextApiResponse } from 'next'
import { join } from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const getFileByName = (req: NextApiRequest, res: NextApiResponse) => {
  const root = '_data'
  //@ts-ignore
  const { path }: { path: string } = req.query
  const parsedPath = JSON.parse(path)

  const realPath = parsedPath?.includes('$')
    ? parsedPath?.split('$').join('/')
    : parsedPath

  try {
    const fullPath = join(process.cwd(), root, realPath)

    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const data = matter(fileContents)
    res.status(200).json({ ok: true, data })
  } catch (error) {
    res.status(500).json({ ok: false, error })
  }
}

export default getFileByName
