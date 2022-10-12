type TMovieItem = {
  id: string
  resultType: string
  image: string
  title: string
  description: string
}

type TMovieSearchResponse = {
  searchType: string
  expression: string
  results: TMovieItem[]
}
