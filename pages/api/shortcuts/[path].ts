import { NextApiRequest, NextApiResponse } from 'next'
import { join } from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { path } = req.query
  const rootDir = join(process.cwd(), '_data')
  //@ts-ignore
  const fullPath = join(rootDir, path)
  const data = fs.readdirSync(fullPath)

  res.status(200).json({ ok: true, data })
}
