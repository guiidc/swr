import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 403) {
      window.location.href = '/login'
    }
    return Promise.reject(err)
  }
)

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    'pm_accessToken'
  )}`
  return config
})

export default axiosInstance
