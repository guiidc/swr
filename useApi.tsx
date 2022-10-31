import useSWR from 'swr'

import axiosInstance from '../utils/axiosInstance'

export default function useApi<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async (currentUrl) => {
    const response = await axiosInstance.get(currentUrl)
    return response.data
  })
  return { data, error }
}
