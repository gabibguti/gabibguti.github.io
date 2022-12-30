import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import movies from './movies.json'
import { Section } from './Section'
import { TotalizerBox } from './TotalizerBox'

export function Movies(): ReactElement {

  const totalMoviesWatched = movies.movies.length
  const totalTVShowsWatched = movies['tv-shows'].length

  const totalMoviesMinWatched = movies.movies.reduce((totalTime, movie) => {
    totalTime += movie['time-min']
    return totalTime
  }, 0)
  const totalTVShowsMinWatched = movies['tv-shows'].reduce((totalTime, TVShow) => {
    totalTime += TVShow['epidodes-watched']*TVShow['episode-time-min']
    return totalTime
  }, 0)
  const totalHoursWatched = Math.round((totalMoviesMinWatched + totalTVShowsMinWatched) / 60)

  return (
    <div className="bg-gradient-to-r from-aero-blue to-light-blue flex flex-col w-screen min-h-screen h-full p-9">
      <div className="flex flex-col items-center h-full">
        <span className="text-4xl font-bold text-xiketic mb-10">
          Movies Wrap-Up 2022
        </span>
        <div className="h-32 grid grid-rows-1 grid-cols-3 gap-4 w-full">
          <TotalizerBox title="Total movies watched" total={totalMoviesWatched} />
          <TotalizerBox title="Total TV Shows watched" total={totalTVShowsWatched} />
          <TotalizerBox title="Total hours watched" total={totalHoursWatched} unit="hour" />
        </div>
        <div className='w-full mt-8'>
        <Link to="/project/movies/top-movies">
          <Section title="Top movies 2022" />
        </Link>
        <Link to="/project/movies/top-tv-shows">
          <Section title="Top TV shows 2022" />
        </Link>
        <Link to="/project/movies/all-movies">
          <Section title="All movies watched 2022" />
        </Link>
        <Link to="/project/movies/all-tv-shows">
          <Section title="All TV shows watched 2022" />
        </Link>
        </div>
      </div>
    </div>
  )
}

