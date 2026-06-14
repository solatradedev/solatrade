import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 15000,
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error('[API]', err.message)
    return Promise.reject(err)
  },
)

export async function fetchCollections() {
  const { data } = await api.get('/collections')
  return data
}

export async function fetchNftsByCollection(slug: string) {
  const { data } = await api.get(`/collections/${slug}/nfts`)
  return data
}

export async function fetchNftDetail(mint: string) {
  const { data } = await api.get(`/nfts/${mint}`)
  return data
}

export default api