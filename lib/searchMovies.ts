import { API_KEY } from '@/lib/constants'

const searchMovies = async (query: string): Promise<TMovieItem[]> => {
  console.log('Fetching movies')

  const res = await fetch(
    `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${query}`
  )
  const data = res.json()

  console.log(data)

  //   if (data) return data
  //   else return []
  return []
}

export default searchMovies
