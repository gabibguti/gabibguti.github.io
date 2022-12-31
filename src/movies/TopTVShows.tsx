import React, { ReactElement } from "react";
import movies from './movies-2022.json'
import { Section } from "./Section";
import { TVShowsTable } from "./TVShowsTable";

export function TopTVShows(): ReactElement {
    return (
        <div className="bg-gradient-to-r from-aero-blue to-light-blue flex flex-col w-screen min-h-screen h-full p-9">
            <div className="flex flex-col h-full">
                <Section title="Top TV shows 2022" />
                <TVShowsTable TVShows={movies['tv-shows'].filter(TVShow => TVShow.top)} />
            </div>
        </div>
    )
}