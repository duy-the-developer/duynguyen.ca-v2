import useSWR, { Fetcher, SWRResponse } from 'swr'

const fetcher: Fetcher<SWRResponse> = (path: string) =>
  fetch(`/api/shortcuts/${path}`).then((res) => res.json())

export const useGetFolderData = (path: string) => {
  const { data, error: swrError } = useSWR(path, fetcher)

  return {
    res: data,
    isLoading: !swrError && !data,
    isError: swrError,
  }
}
