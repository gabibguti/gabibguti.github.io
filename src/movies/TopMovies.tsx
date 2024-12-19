import React, { ReactElement } from 'react'
import { MoviesTable } from './MoviesTable'
import { Section } from './Section'
import { useParams } from 'react-router-dom'
import { MOVIES, YEAR } from './Movies'

export function TopMovies(): ReactElement {
  const { year } = useParams()
  if (!year) {
    return <>Error</>
  }

  const movies = MOVIES[year as YEAR]

  return (
    <div className="bg-gradient-to-r from-aero-blue to-light-blue flex flex-col w-screen min-h-screen h-full p-9">
      <div className="flex flex-col h-full">
        <Section title={`Top movies ${year}`} />
        {/* <MoviesTable movies={movies.movies.filter((movie: any) => movie.top)} /> */}
      </div>
    </div>
  )
}
