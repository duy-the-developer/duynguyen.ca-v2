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

  useEffect(() => {
    const paramName = name.includes('/') ? name.split('/').join('$') : name
    console.log(paramName)

    fetch(`/api/files/${JSON.stringify(paramName)}`)
      .then((res) => res.json())
      .then((parsedRes) => setFile(parsedRes))
      .catch((error) => console.error(error))
  }, [])

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
