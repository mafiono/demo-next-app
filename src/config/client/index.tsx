import axios from 'axios'
import Cookies from 'js-cookie'
import { SESSIONS_NAME } from '../enum'
const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
axiosClient.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get(
  SESSIONS_NAME.JWT_TOKEN,
)}`
export default axiosClient
