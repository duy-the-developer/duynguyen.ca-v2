import { NextApiRequest, NextApiResponse } from 'next'
import { join } from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const getFileByName = (req: NextApiRequest, res: NextApiResponse) => {
  const name = req.query.name
  const postsDir = join(process.cwd(), '_data')
  //@ts-ignore
  const fullPath = join(postsDir, name)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const data = matter(fileContents)
  res.status(200).json({ ok: true, data })
}

export default getFileByName
