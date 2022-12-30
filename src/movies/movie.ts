export type Movie = {
  title: string
  sequence: number
  'time-min': number
  year: number
  genres: string[]
  'grade-imdb': number
  'grade-gabriela': number
  'strong-points': string | null
  'weak-points': string | null
  'recommended-by': string[] | null
  rewatch: boolean
}

export type TVShow = {
  title: string
  season: number
  episodes: number
  'epidodes-watched': number
  'episode-time-min': number
  year: number
  genres: string[]
  'grade-imdb': number
  'grade-gabriela': number
  'strong-points': string | null
  'weak-points': string | null
  'recommended-by': string[] | null
  rewatch: boolean
}
