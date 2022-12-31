import React, { ReactElement } from 'react'
import movies from './best-movies.json'
import { MoviesTable } from './MoviesTable'
import { Section } from './Section'

export function TopMoviesFromAllTime(): ReactElement {
  return (
    <div className="bg-gradient-to-r from-aero-blue to-light-blue flex flex-col w-screen min-h-screen h-full p-9">
      <div className="flex flex-col h-full">
        <Section title="Top movies from all time" />
        <span className="py-3 font-bold">
          Essentially, movies that instigate your curiosity by proposing a
          mystery that needs to be solved and either go very crazy or have a
          great plot twist.
        </span>
        <MoviesTable movies={movies.movies} />
      </div>
    </div>
  )
}
