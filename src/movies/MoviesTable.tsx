import React, { ReactElement } from 'react'
import type { Movie } from './movie'
import { FormattedList } from 'react-intl'

function MovieDetails(movie: Movie): ReactElement {
  return (
    <div className="grid grid-cols-11 gap-2 bg-green-50 p-2 rounded-md w-full text-xiketic">
      <div className="col-span-4 row-span-5 bg-indigo-500 p-2 rounded-md">
        <span className="flex items-center justify-center h-full text-3xl font-bold">
          {movie.title}
        </span>
      </div>
      <div className="col-span-2 bg-indigo-300 p-2 rounded-md">
        <div className="flex flex-col">
          <span className="text-xs font-bold">IMDB Grade</span>
          <span className="font-bold">{movie['grade-imdb']}</span>
        </div>
      </div>
      <div className="col-span-2 bg-indigo-300 p-2 rounded-md">
        <div className="flex flex-col">
          <span className="text-xs font-bold">Grade</span>
          <span className="font-bold">{movie['grade-gabriela']}</span>
        </div>
      </div>
      <div className="col-span-1 bg-indigo-200 p-2 rounded-md">
        <div className="flex flex-col">
          <span className="text-xs">Time</span>
          <span>{movie['time-min']} min</span>
        </div>
      </div>
      <div className="col-span-1 bg-indigo-200 p-2 rounded-md">
        <div className="flex flex-col">
          <span className="text-xs">Year</span>
          <span>{movie.year}</span>
        </div>
      </div>
      <div className="col-span-1 bg-indigo-200 p-2 rounded-md">
        <div className="flex flex-col">
          <span className="text-xs">Rewatching?</span>
          <span>{movie.rewatch ? 'Yes' : 'No'}</span>
        </div>
      </div>

      <div className="col-span-7 bg-indigo-200 p-2 rounded-md">
        <div className="flex flex-col">
          <span className="text-xs">Strong points</span>
          <span>{movie['strong-points'] ?? '-'}</span>
        </div>
      </div>

      <div className="col-span-7 bg-indigo-200 p-2 rounded-md">
        <div className="flex flex-col">
          <span className="text-xs">Weak points</span>
          <span>{movie['weak-points'] ?? '-'}</span>
        </div>
      </div>

      <div className="col-span-7 col-start-5 p-2 rounded-md">
        <div className="flex flex-col">
          <span className="text-xs">Genres</span>
          <div className="flex flex-row gap-1 mt-2">
            {movie.genres.map((genre) => (
              <div className="rounded-full bg-indigo-100 text-xs py-1 px-2">
                {genre}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-7 col-start-5 p-2 rounded-md">
        <div className="flex flex-col">
          <span className="text-xs">Recommended by</span>
          <span className="text-sm">
            {movie['recommended-by'] ? (
              <FormattedList
                type="conjunction"
                value={movie['recommended-by']}
              />
            ) : (
              '-'
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

export function MoviesTable({ movies }: { movies: Movie[] }): ReactElement {
  return (
    <>
      {movies.map((movie) => (
        <div className="py-2">
          <MovieDetails {...movie} />
        </div>
      ))}
    </>
  )
}
