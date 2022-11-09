import { useState, useEffect } from 'react'
import useGetFileContent from './hooks/useGetFileContent'
import ReactMarkdown from 'react-markdown'

type TFile = {
  ok: boolean
  data: {
    data: string
    content: string
  }
}

export default ({ name }: { name: string }) => {
  const [file, setFile] = useState<TFile | null>(null)
  useEffect(() => {
    fetch(`/api/files/${name}`)
      .then((res) => res.json())
      .then((parsedRes) => {
        setFile(parsedRes)
        console.log(parsedRes)
      })
  }, [])

  return (
    <div className='bg-gray border-0 border-t-0 border-solid border-gray'>
      {file && <div>{file.data.content}</div>}
    </div>
  )
}
