import React, { ReactElement, useEffect, useState } from 'react'
import { FormattedList } from 'react-intl'
import Spinner from '../utils/Spinner'
import { SelectType } from './Chips'
import { Movie } from './movie'
import MOVIES from './movies.json'
import {
  GenreResponse,
  SearchMovie,
  SearchMovieResponse,
  SearchTvShow,
  SearchTvShowResponse,
  useGetMovieDetails,
} from './movieService'

interface ReviewResult {
  id: number
  original_title: string
  poster_path: string | null
  release_date: string | null
  genre_ids: number[]
}

function buildReviewResultFromMovie(value: SearchMovie): ReviewResult {
  return {
    id: value.id,
    original_title: value.original_title,
    poster_path: value.poster_path,
    release_date: value.release_date,
    genre_ids: value.genre_ids,
  }
}

function buildReviewResultFromTVShow(value: SearchTvShow): ReviewResult {
  return {
    id: value.id,
    original_title: value.original_name,
    poster_path: value.poster_path,
    release_date: value.first_air_date,
    genre_ids: value.genre_ids,
  }
}

export function Reviews({
  emptyQuery,
  isLoading,
  movieData,
  tvShowData,
  selected,
  movieGenres,
}: {
  emptyQuery: boolean
  isLoading: boolean
  movieData?: SearchMovieResponse
  tvShowData?: SearchTvShowResponse
  selected: SelectType
  movieGenres?: GenreResponse
}): ReactElement {
  if (isLoading) {
    return (
      <span className="h-60 border-2 border-dotted border-dark-forest rounded-large justify-items-center content-center text-dark-forest fill-current text-4xl">
        <Spinner />
      </span>
    )
  }

  if (emptyQuery) {
    return (
      <span className="h-60 border-2 border-dotted border-dark-forest rounded-large content-center text-center text-dark-forest text-4xl">
        Start searching!
      </span>
    )
  }

  return (
    <ReviewResults
      movieData={movieData}
      tvShowData={tvShowData}
      selected={selected}
      movieGenres={movieGenres}
    />
  )
}

export function ReviewResults({
  movieData,
  tvShowData,
  selected,
  movieGenres,
}: {
  movieData?: SearchMovieResponse
  tvShowData?: SearchTvShowResponse
  selected: SelectType
  movieGenres?: GenreResponse
}): ReactElement {
  const [results, setResults] = useState<ReviewResult[]>()
  const myMovies = MOVIES.movies as { [key: string]: Movie }

  useEffect(() => {
    let res: ReviewResult[] = []
    if (selected.movie && movieData) {
      res = [...movieData.results.slice(0, 4).map(buildReviewResultFromMovie)]
    }
    if (selected['tv-show'] && tvShowData) {
      res = [
        ...res,
        ...tvShowData.results.slice(0, 4).map(buildReviewResultFromTVShow),
      ]
    }
    res.sort((a, b) => {
      if (String(a.id) in myMovies) {
        return -1
      }
      if (String(b.id) in myMovies) {
        return 1
      }
      return 0
    })
    setResults(res)
  }, [selected, movieData, tvShowData, movieData?.results, tvShowData?.results])

  if (!results || results?.length === 0) {
    return (
      <span className="h-60 border-2 border-dotted border-dark-forest rounded-large content-center text-center text-dark-forest text-4xl">
        No results.
      </span>
    )
  }

  return (
    <div className="grid grid-flow-cols grid-cols-2 gap-6 w-full">
      {results?.map((movie) => (
        <MovieDetails movie={movie} movieGenres={movieGenres} />
      ))}
    </div>
  )
}

function MovieDetails({
  movie,
  movieGenres,
}: {
  movie: ReviewResult
  movieGenres?: GenreResponse
}) {
  const { data: movieDetails } = useGetMovieDetails(movie.id)

  const myMovies = MOVIES.movies as { [key: string]: Movie }

  const genres = movie.genre_ids.reduce<string[]>((acc, genre_id) => {
    const g = movieGenres?.genres.find((genre) => genre.id === genre_id)
    if (!g) {
      return acc
    }
    return [...acc, g.name]
  }, [])

  const isReviewed = movie.id in myMovies

  return (
    <div className="flex flex-row bg-dark-forest text-white rounded-lg p-5">
      <img
        className={`w-48 h-80 object-cover rounded-lg ${
          isReviewed ? '' : 'filter grayscale'
        }`}
        alt={movie.original_title + ' poster'}
        src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
      />
      <div className="flex flex-col pl-5 w-full">
        <div className="grid grid-cols-7 gap-2 font-nunito">
          <div className="col-span-8">
            <span className="font-staatliches text-3xl pb-2 text-ellipsis overflow-hidden">
              {movie.original_title}
            </span>
          </div>
          <div className="col-span-8">
            <div className="flex flex-col">
              <div className="flex flex-row gap-2 py-2">
                {genres.map((genre) => (
                  <div className="text-xs rounded-full px-2 ring-1 ring-white">
                    {genre}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1 col-start-1">
            <div className="flex flex-col">
              <span className="text-xs">Year</span>
              <span>
                {movie.release_date
                  ? new Date(movie.release_date).getFullYear()
                  : '-'}
              </span>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col">
              <span className="text-xs">Runtime</span>
              <span>
                {movieDetails?.runtime ? `${movieDetails?.runtime} min` : '-'}
              </span>
            </div>
          </div>
          {isReviewed && (
            <>
              <div className="col-span-2">
                <div className="flex flex-col">
                  <span className="text-xs font-bold">IMDB Grade</span>
                  <span className="font-bold">
                    {myMovies[String(movie.id)]?.['grade-imdb']}
                  </span>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex flex-col">
                  <span className="text-xs font-bold">Gabriela's Grade</span>
                  <span className="font-bold">
                    {myMovies[String(movie.id)]?.['grade-gabriela']}
                  </span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col">
                  <span className="text-xs font-bold">Rewatching?</span>
                  <span>
                    {myMovies[String(movie.id)]?.rewatch ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
              <div className="col-span-7 col-start-1">
                <div className="flex flex-col">
                  <span className="text-xs font-bold">Strong points</span>
                  <span>
                    {myMovies[String(movie.id)]?.['strong-points'] ?? '-'}
                  </span>
                </div>
              </div>
              <div className="col-span-7 col-start-1">
                <div className="flex flex-col">
                  <span className="text-xs font-bold">Weak points</span>
                  <span>
                    {!!myMovies[String(movie.id)]?.['weak-points']
                      ? myMovies[String(movie.id)]?.['weak-points']
                      : '-'}
                  </span>
                </div>
              </div>
              <div className="col-span-7 col-start-1">
                <div className="flex flex-col">
                  <span className="text-xs">Recommended by</span>
                  <span className="rounded-md">
                    {myMovies[String(movie.id)]?.['recommended-by']?.length ? (
                      <FormattedList
                        type="conjunction"
                        value={
                          myMovies[String(movie.id)][
                            'recommended-by'
                          ] as string[]
                        }
                      />
                    ) : (
                      '-'
                    )}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* <span>{movie.id}</span> */}
    </div>
  )
}
