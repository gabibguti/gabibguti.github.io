import React, { ReactElement, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import movies2022 from './movies-2022.json'
import movies2023 from './movies-2023.json'
import bestmovies from './best-movies.json'
import { Section } from './Section'
import { TotalizerBox } from './TotalizerBox'
import { Year } from './Year'

export const MOVIES = {
  "2023": movies2023,
  "2022": movies2022,
  "All": bestmovies,
}

export type YEAR = keyof typeof MOVIES

const YEARS: YEAR[] = ["2023", "2022", "All"]

const DEFAULT_YEAR: YEAR = "2023"

export function Movies(): ReactElement {
  const params = useParams()

  const [year, setYear] = useState<YEAR>(params.year as YEAR ?? DEFAULT_YEAR);
  const [movies, setMovies] = useState(MOVIES[year])

  const navigate = useNavigate()

  useEffect(() => {
    navigate(`/project/movies/${year}`)
    setMovies(MOVIES[year])
  }, [year, navigate])

  const totalMoviesWatched = movies.movies.length

  const totalTVShowsWatched = movies.tv_shows.length

  const totalMoviesMinWatched = (movies.movies as any).reduce((totalTime: any, movie: any) => {
    totalTime += movie['time-min']
    return totalTime
  }, 0)
  const totalTVShowsMinWatched = (movies.tv_shows as any).reduce(
    (totalTime: any, TVShow: any) => {
      totalTime += TVShow['epidodes-watched'] * TVShow['episode-time-min']
      return totalTime
    },
    0
  )
  const totalHoursWatched = Math.round(
    (totalMoviesMinWatched + totalTVShowsMinWatched) / 60
  )

  return (
    <div className="bg-gradient-to-r from-aero-blue to-light-blue flex flex-col w-screen min-h-screen h-full p-9">
      <div className="flex flex-col items-center h-full">
        <div className="flex flex-row items-center mb-10">
          <span className="text-4xl font-bold text-xiketic mr-4">
            Movies Wrap-Up
          </span>
          <Year year={year} years={YEARS} setYear={setYear}/>
        </div>
        <div className="h-32 grid grid-rows-1 grid-cols-3 gap-4 w-full">
          <TotalizerBox
            title="Total movies watched"
            total={totalMoviesWatched}
          />
          <TotalizerBox
            title="Total TV Shows watched"
            total={totalTVShowsWatched}
          />
          <TotalizerBox
            title="Total hours watched"
            total={totalHoursWatched}
            unit="hour"
          />
        </div>
        <div className="w-full mt-8">
          {
            (year === "All")
            ?<>
              <Link to="/project/movies/top-movies-all-time">
                <Section title="Top movies from all time" />
              </Link>
            </>
            :<>
              <Link to={`/project/movies/top-movies/${year}`}>
                <Section title="Top movies" />
              </Link>
              <Link to={`/project/movies/top-tv-shows/${year}`}>
                <Section title="Top TV shows" />
              </Link>
              <Link to={`/project/movies/all-movies/${year}`}>
                <Section title="All movies watched" />
              </Link>
              <Link to={`/project/movies/all-tv-shows/${year}`}>
                <Section title="All TV shows watched" />
              </Link>
            </>
          }
        </div>
      </div>
    </div>
  )
}
