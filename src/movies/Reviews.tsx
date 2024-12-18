import React, { ReactElement, useEffect, useState } from 'react'
import Spinner from '../utils/Spinner'
import { SelectType } from './Chips'
import MOVIES from './movies.json'
import { SearchMovie, SearchMovieResponse } from './movieService'

export function Reviews({
  emptyQuery,
  isLoading,
  movieData,
  tvShowData,
  selected,
}: {
  emptyQuery: boolean
  isLoading: boolean
  movieData?: SearchMovieResponse
  tvShowData?: SearchMovieResponse
  selected: SelectType
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
    />
  )
}

export function ReviewResults({
  movieData,
  tvShowData,
  selected,
}: {
  movieData?: SearchMovieResponse
  tvShowData?: SearchMovieResponse
  selected: SelectType
}): ReactElement {
  const [results, setResults] = useState<SearchMovie[]>()

  useEffect(() => {
    let res: SearchMovie[] = []
    if (selected.movie && movieData) {
      res = [...movieData.results.slice(0, 4)]
    }
    if (selected['tv-show'] && tvShowData) {
      res = [...res, ...tvShowData.results.slice(0, 4)]
    }
    setResults(res)
    console.log(res)
  }, [selected, movieData, tvShowData, movieData?.results, tvShowData?.results])

  if (!results || results?.length === 0) {
    return (
      <span className="h-60 border-2 border-dotted border-dark-forest rounded-large content-center text-center text-dark-forest text-4xl">
        No results.
      </span>
    )
  }

  return (
    <div className="grid grid-flow-cols grid-cols-4 gap-6 w-full">
      {results?.map((movie) => (
        <div className="flex flex-col items-center">
          <img
            className={
              //
              String(movie.id) in MOVIES.movies
                ? 'w-40 rounded-lg'
                : 'w-40 rounded-lg filter grayscale'
            }
            alt={movie.title + ' poster'}
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          />
          <span>{movie.original_title}</span>
          <span>{movie.id}</span>
        </div>
      ))}
    </div>
  )
}
