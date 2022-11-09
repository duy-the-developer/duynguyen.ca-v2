import { useState, useEffect } from 'react'

export default async (name: string) => {
  const [file, setFile] = useState()
  useEffect(() => {
    fetch(`/api/files/${name}`)
      .then((res) => res.json())
      .then((parsedRes) => {
        setFile(parsedRes)
        console.log(parsedRes)
      })
  }, [])
  return file
}
