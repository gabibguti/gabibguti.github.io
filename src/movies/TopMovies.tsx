import React, { ReactElement } from 'react'
import { MoviesTable } from './MoviesTable'
import movies from './movies-2022.json'
import { Section } from './Section'

export function TopMovies(): ReactElement {
  return (
    <div className="bg-gradient-to-r from-aero-blue to-light-blue flex flex-col w-screen min-h-screen h-full p-9">
      <div className="flex flex-col h-full">
        <Section title="Top movies 2022" />
        <MoviesTable movies={movies.movies.filter((movie) => movie.top)} />
      </div>
    </div>
  )
}
