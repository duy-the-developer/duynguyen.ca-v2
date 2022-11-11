'use client'

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import ContentWrapper from '../../../../src/components/common/ContentWrapper'

type TFile = {
  ok: boolean
  data: {
    data: string
    content: string
  }
}

type TProps = {
  name: string
}

const FileContent = ({ name }: TProps) => {
  const [file, setFile] = useState<TFile | null>(null)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const paramName = name.includes('/') ? name.split('/').join('$') : name

    fetch(`/api/files/${JSON.stringify(paramName)}`)
      .then((res) => res.json())
      .then((parsedRes) => setFile(parsedRes))
      .catch((error) => {
        console.error(error)
        setError(true)
      })
  }, [])

  if (error) {
    return (
      <ContentWrapper>
        <p className='text-red'>Error Fetching Data</p>
      </ContentWrapper>
    )
  }

  return (
    <ContentWrapper>
      {!file && 'Loading...'}
      {file && (
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {file.data.content}
        </ReactMarkdown>
      )}
    </ContentWrapper>
  )
}

export default FileContent
