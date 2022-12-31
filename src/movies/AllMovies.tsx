import React, { ReactElement } from "react";
import movies from './movies-2022.json'
import { MoviesTable } from "./MoviesTable";
import { Section } from "./Section";

export function AllMovies(): ReactElement {
    return (
      <div className="bg-gradient-to-r from-aero-blue to-light-blue flex flex-col w-screen min-h-screen h-full p-9">
        <div className="flex flex-col h-full">
            <Section title="All movies watched 2022" />
            <MoviesTable movies={movies.movies} />
        </div>
      </div>
    )
}