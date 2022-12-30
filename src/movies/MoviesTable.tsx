import React, { ReactElement } from 'react'
import type { Movie } from './movie'
import {FormattedList} from "react-intl"

// "title": string,
// "sequence": number,
// "time-min": number,
// "year": number,
// "genres": string[],
// "grade-imdb": number,
// "grade-gabriela": number,
// "strong-points"?: string,
// "weak-points"?: string,
// "recommended-by"?: string[],
// "rewatch": boolean

function MovieDetails(movie: Movie): ReactElement {
  return (
    <div className="grid grid-cols-8 gap-2 bg-green-50 p-2 rounded-md w-full text-xiketic">
      <div className="col-span-3 row-span-4 bg-indigo-500 p-2 rounded-md">
        <span className="flex items-center justify-center h-full text-3xl font-bold">
          {movie.title}
        </span>
      </div>
      <div className="col-span-1 bg-indigo-300 p-2 rounded-md">
        <div className="flex flex-col">
          <span className="text-xs font-bold">IMDB Grade</span>
          <span className="font-bold">{movie['grade-imdb']}</span>
        </div>
      </div>
      <div className="col-span-1 bg-indigo-300 p-2 rounded-md">
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

      <div className="col-span-5 bg-indigo-200 p-2 rounded-md">
        <div className="flex flex-col">
          <span className="text-xs">Strong points</span>
          <span>{movie['strong-points'] ?? '-'}</span>
        </div>
      </div>

      <div className="col-span-5 bg-indigo-200 p-2 rounded-md">
        <div className="flex flex-col">
          <span className="text-xs">Weak points</span>
          <span>{movie['weak-points'] ?? '-'}</span>
        </div>
      </div>

      <div className="col-span-5 col-start-4 p-2 rounded-md">
        <div className="flex flex-col">
          <span className="text-xs">Recommended by</span>
          <span>{movie['recommended-by'] ? 
          <FormattedList type='conjunction' value={movie['recommended-by']} /> : "-"}</span>
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
