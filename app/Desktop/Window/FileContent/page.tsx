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

export default ({ name }: { name: string }) => {
  const [file, setFile] = useState<TFile | null>(null)

  useEffect(() => {
    fetch(`/api/files/${name}`)
      .then((res) => res.json())
      .then((parsedRes) => setFile(parsedRes))
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
