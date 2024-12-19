import React, { ReactElement, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import IconChevronLeft from '../assets/IconChevronLeft'
import bestmovies from './best-movies.json'
import { Chips, SelectType } from './Chips'
import movies2023 from './movies-2023.json'
import { useGetMovie, useGetMovieGenres, useGetTVShow } from './movieService'
import { Reviews } from './Reviews'
import { Search } from './Search'

// export const MOVIES = {
//   '2023': movies2023,
//   '2022': movies2022,
//   All: bestmovies,
// }

// export type YEAR = keyof typeof MOVIES

// const YEARS: YEAR[] = ['2023', '2022', 'All']

// const DEFAULT_YEAR: YEAR = '2022'

export function Movies(): ReactElement {
  const params = useParams()

  const [query, setQuery] = useState<string>('')
  const [selected, setSelected] = useState<SelectType>({
    movie: true,
    'tv-show': true,
  })

  const {data: movieGenres } = useGetMovieGenres()

  const { data: movieData, isLoading: isLoadingMovies } = useGetMovie(query)
  const { data: tvShowData, isLoading: isLoadingTVShow } = useGetTVShow(query)

  const isLoading = isLoadingMovies || isLoadingTVShow

  // const [year, setYear] = useState<YEAR>((params.year as YEAR) ?? DEFAULT_YEAR)
  // const [movies, setMovies] = useState(MOVIES[year])

  const navigate = useNavigate()

  // useEffect(() => {
  //   navigate(`/project/movies/${year}`)
  //   setMovies(MOVIES[year])
  // }, [year, navigate])

  // const totalMoviesWatched = movies.movies.length

  // const totalTVShowsWatched = movies.tv_shows.length

  // const totalMoviesMinWatched = (movies.movies as any).reduce(
  //   (totalTime: any, movie: any) => {
  //     totalTime += movie['time-min']
  //     return totalTime
  //   },
  //   0
  // )
  // const totalTVShowsMinWatched = (movies.tv_shows as any).reduce(
  //   (totalTime: any, TVShow: any) => {
  //     totalTime += TVShow['epidodes-watched'] * TVShow['episode-time-min']
  //     return totalTime
  //   },
  //   0
  // )
  // const totalHoursWatched = Math.round(
  //   (totalMoviesMinWatched + totalTVShowsMinWatched) / 60
  // )

  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-col bg-light-yellow items-center justify-center font-staatliches py-5">
        <div className="flex w-full px-5">
          <div className="flex-none w-40 pt-4">
            <Link
              to="/"
              className="bg-dark-forest self-start font-nunito text-white py-4 px-6 rounded-full fill-current flex flex-row justify-around"
            >
              <IconChevronLeft />
              <span>Back</span>
            </Link>
          </div>
          <div className="flex-grow justify-center text-center">
            <span className="text-9xl text-moss-green text-center">
              Movie Ratings
            </span>
          </div>
          <div className="flex none w-40"></div>
        </div>
        <span className="text-xiketic" style={{ fontSize: '20rem' }}>
          2024
        </span>
      </div>
      <span className="flex flex-col bg-dark-forest font-nunito p-5 text-white text-lg">
        Movie fanatic? Me too. Enter my motion picture sanctuary where I share
        my insights, opinions, and reflections on a wide range of films!
      </span>
      <div className="flex flex-col p-5 bg-olive-green text-light-yellow">
        <span className="font-nunito text-lg pb-5">
          What's better, Sherlock Holmes or Enola Holmes? Let's not start that
          argument here. I’ve got enough drama from the films. Hold my popcorn,
          let's dive in!
        </span>
        <span className="font-staatliches text-8xl py-5">Reviews</span>
      </div>
      <div className="flex flex-col p-5 bg-light-yellow text-moss-green">
        <div className="flex flex-row pb-10 w-full">
          <Search search={setQuery} />
          <Chips selected={selected} setSelected={setSelected} />
        </div>
        <Reviews
          emptyQuery={!query}
          isLoading={isLoading}
          movieData={movieData}
          tvShowData={tvShowData}
          selected={selected}
          movieGenres={movieGenres}
        />
      </div>
    </div>
    // <div className="bg-gradient-to-r from-aero-blue to-light-blue flex flex-col w-screen min-h-screen h-full p-9">
    //   <div className="flex flex-col items-center h-full">
    //     <div className="flex flex-row items-center mb-10">
    //       <span className="text-4xl font-bold text-xiketic mr-4">
    //         Movies Wrap-Up
    //       </span>
    //       <Year year={year} years={YEARS} setYear={setYear}/>
    //     </div>
    //     <div className="h-32 grid grid-rows-1 grid-cols-3 gap-4 w-full">
    //       <TotalizerBox
    //         title="Total movies watched"
    //         total={totalMoviesWatched}
    //       />
    //       <TotalizerBox
    //         title="Total TV Shows watched"
    //         total={totalTVShowsWatched}
    //       />
    //       <TotalizerBox
    //         title="Total hours watched"
    //         total={totalHoursWatched}
    //         unit="hour"
    //       />
    //     </div>
    //     <div className="w-full mt-8">
    //       {
    //         (year === "All")
    //         ?<>
    //           <Link to="/project/movies/top-movies-all-time">
    //             <Section title="Top movies from all time" />
    //           </Link>
    //         </>
    //         :<>
    //           <Link to={`/project/movies/top-movies/${year}`}>
    //             <Section title="Top movies" />
    //           </Link>
    //           <Link to={`/project/movies/top-tv-shows/${year}`}>
    //             <Section title="Top TV shows" />
    //           </Link>
    //           <Link to={`/project/movies/all-movies/${year}`}>
    //             <Section title="All movies watched" />
    //           </Link>
    //           <Link to={`/project/movies/all-tv-shows/${year}`}>
    //             <Section title="All TV shows watched" />
    //           </Link>
    //         </>
    //       }
    //     </div>
    //   </div>
    // </div>
  )
}
