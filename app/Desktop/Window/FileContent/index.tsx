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
    let paramName = name
    if (name.includes('/')) {
      paramName = name.split('/').join('+')
    }

    fetch(`/api/files/${paramName}`)
      .then((res) => res.json())
      .then((parsedRes) => setFile(parsedRes))
      .catch((error) => console.log(error))
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
