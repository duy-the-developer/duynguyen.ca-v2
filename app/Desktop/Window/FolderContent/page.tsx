'use client'

import { useEffect, useState } from 'react'
import ContentWrapper from '../../../../src/components/common/ContentWrapper'
import Shortcuts from '../../Shortcuts'

export default ({ path }: { path: string }) => {
  const [shortcuts, setShortcuts] = useState<string[] | null>(null)

  useEffect(() => {
    fetch(`api/shortcuts/${path}`)
      .then((res) => res.json())
      .then((parsedRes) => setShortcuts(parsedRes.data))
  }, [])

  return (
    <ContentWrapper cStyle='h-[50vh] w-[50vw]'>
      {!shortcuts && <p>Loading...</p>}
      {shortcuts &&
        shortcuts.map((each) => {
          return (
            <Shortcuts
              name={each}
              addWindow={() => {
                console.log('TODO: Add window function to nested icons')
              }}
            />
          )
        })}
    </ContentWrapper>
  )
}
