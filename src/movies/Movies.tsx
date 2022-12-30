import React, { ReactElement } from 'react'
import { MoviesTable } from './MoviesTable'
import { TotalizerBox } from './TotalizerBox'
import movies from './movies.json'
import { Movie, TVShow } from './movie'
import { TVShowsTable } from './TVShowsTable'

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
        <div className="pt-8 w-full">
          <div className='rounded-md bg-gray-800 text-aero-blue mb-2 py-5 px-5'>
            <span className='text-2xl font-bold uppercase'>Top movies 2022</span>
          </div>
          <MoviesTable movies={movies.movies.filter(movie => movie.top)} />
        </div>
        <div className="pt-8 w-full">
          <div className='rounded-md bg-gray-800 text-aero-blue mb-2 py-5 px-5'>
            <span className='text-2xl font-bold uppercase'>Top TV shows 2022</span>
          </div>
          <TVShowsTable TVShows={movies['tv-shows'].filter(TVShow => TVShow.top)} />
        </div>
        <div className="pt-8 w-full">
          <div className='rounded-md bg-gray-800 text-aero-blue mb-2 py-5 px-5'>
            <span className='text-2xl font-bold uppercase'>All movies watched</span>
          </div>
          <MoviesTable movies={movies.movies as Movie[]} />
        </div>
        <div className="pt-8 w-full">
          <div className='rounded-md bg-gray-800 text-aero-blue mb-2 py-5 px-5'>
            <span className='text-2xl font-bold uppercase'>All TV shows watched</span>
          </div>
          <TVShowsTable TVShows={movies['tv-shows'] as TVShow[]} />
        </div>
      </div>
    </div>
  )
}

