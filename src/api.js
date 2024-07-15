import axios from 'axios'

export const base_url = import.meta.env.VITE_BASE_URL

export const LOCAL_STORAGE_KEY = 'QIRA_V1'

const client = axios.create({
  baseURL: base_url
})

client.interceptors.request.use(
  function (config) {
    const localStorageObj = JSON.parse(
      localStorage.getItem(`persist:${LOCAL_STORAGE_KEY}`)
    )?.auth
    if (!localStorageObj) return config
    const token = localStorageObj?.currentUser?.token

    if (!token) return config

    const newConfig = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`
      }
    }

    return newConfig
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default client
