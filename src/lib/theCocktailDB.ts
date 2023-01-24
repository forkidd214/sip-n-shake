import axios from 'axios'

const THE_COCKTAIL_DB_BASE_URL = 'https://www.thecocktaildb.com'
const THE_COCKTAIL_DB_API = '/api/json/v1/1'

const cocktailDb = axios.create({
  baseURL: THE_COCKTAIL_DB_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: '1', // test API KEY
  },
})

export const fetchAPI = async (path: string) => {
  const res = await cocktailDb.get(THE_COCKTAIL_DB_API + path)

  return res?.data
}
