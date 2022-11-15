import useSWR, { Fetcher } from 'swr'

export type TFile = {
  ok: boolean
  data: {
    data: string
    content: string
  }
}

const fetcher: Fetcher<TFile> = (paramName: string) =>
  fetch(`/api/files/${JSON.stringify(paramName)}`).then((res) => res.json())

export const useGetFileData = (path: string) => {
  const { data, error: swrError } = useSWR(path, fetcher)

  return {
    res: data,
    isLoading: !swrError && !data,
    isError: swrError,
  }
}
