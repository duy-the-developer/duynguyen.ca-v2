'use client'

import ContentWrapper from '../../../../src/components/common/ContentWrapper'
import Error from '../../../../src/components/common/Error'
import Shortcuts from '../../Shortcuts'

import { useGetFolderData } from './hooks/useGetFolderData'

const FolderContent = ({ path }: { path: string }) => {
  const { res, isLoading, isError } = useGetFolderData(path)

  if (isError) {
    return (
      <Error
        message={
          'Error Fetching Data Please Notify Duy at duythedeveloper@gmail.com'
        }
      />
    )
  }

  if (isLoading) {
    return <ContentWrapper cStyle='h-full w-full'>Loading...</ContentWrapper>
  }

  return (
    <ContentWrapper cStyle='h-full'>
      <div className='flex'>
        {res!.data.map((each: string) => {
          return <Shortcuts name={`${path}/${each}`} />
        })}
      </div>
    </ContentWrapper>
  )
}

export default FolderContent
