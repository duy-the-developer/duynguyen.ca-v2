'use client'

import { useContext, useEffect, useState } from 'react'
import ContentWrapper from '../../../../src/components/common/ContentWrapper'
import { WindowsContext } from '../../../../src/contexts/WindowsContext'
import Shortcuts from '../../Shortcuts'

const FolderContent = ({ path }: { path: string }) => {
  const [shortcuts, setShortcuts] = useState<string[] | null>(null)

  const { addWindow } = useContext(WindowsContext)

  useEffect(() => {
    fetch(`api/shortcuts/${path}`)
      .then((res) => res.json())
      .then((parsedRes) => setShortcuts(parsedRes.data))
  }, [])

  return (
    <ContentWrapper>
      {!shortcuts && <p>Loading...</p>}
      <div className='flex'>
        {shortcuts &&
          shortcuts.map((each) => {
            return <Shortcuts name={`${path}/${each}`} />
          })}
      </div>
    </ContentWrapper>
  )
}

export default FolderContent
