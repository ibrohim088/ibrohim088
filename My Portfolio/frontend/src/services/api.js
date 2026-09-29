import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use((config) => {
  const lang = localStorage.getItem('lang') || 'uz'
  config.headers['Accept-Language'] = lang
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)

const getProfile = () => api.get('/profile')
const getEducation = () => api.get('/educations')
const getTechnologies = () => api.get('/technologies')
const getCertificates = () => api.get('/certificate')
const sendContact = (data) => api.post('/contacts', data)
const downloadResume = (lang) => api.get(`/resume?lang=${lang}`, { responseType: 'blob' })
const downloadCV = (lang) => api.get(`/cv?lang=${lang}`, { responseType: 'blob' })

export { getProfile, getEducation, getTechnologies, getCertificates, sendContact, downloadResume, downloadCV }