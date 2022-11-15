'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import ContentWrapper from '../../../../src/components/common/ContentWrapper'
import Error from '../../../../src/components/common/Error'
import { useGetFileData } from './hooks/useGetFileData'

type TProps = {
  name: string
}

const FileContent = ({ name }: TProps) => {
  const paramName = name.includes('/') ? name.split('/').join('$') : name

  const { res, isLoading, isError } = useGetFileData(paramName)

  if (isError) {
    return (
      <Error
        message={`Error Fetching Data 
        Please Notify Duy at duythedeveloper@gmail.com`}
      />
    )
  }

  if (isLoading) {
    return <ContentWrapper cStyle='h-full w-full'>Loading...</ContentWrapper>
  }

  return (
    <ContentWrapper cStyle='h-[89vh] w-full'>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
        {res!.data.content}
      </ReactMarkdown>
    </ContentWrapper>
  )
}

export default FileContent
