import React, { ReactElement, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import IconChevronLeft from '../assets/IconChevronLeft'
import IconChevronRight from '../assets/IconChevronRight'
import IconStar from '../assets/IconStar'
import { Chips, SelectType } from './Chips'
import LOCAL_DATABASE from './movies.json'
import { useGetMovie, useGetMovieGenres, useGetTVShow } from './movieService'
import { Reviews } from './Reviews'
import { Search } from './Search'

export function Movies(): ReactElement {
  const params = useParams()

  const [query, setQuery] = useState<string>('')
  const [selected, setSelected] = useState<SelectType>({
    movie: true,
    'tv-show': true,
  })

  const { data: movieGenres } = useGetMovieGenres()

  const { data: movieData, isLoading: isLoadingMovies } = useGetMovie(query)
  const { data: tvShowData, isLoading: isLoadingTVShow } = useGetTVShow(query)

  const isLoading = isLoadingMovies || isLoadingTVShow

  const totalMoviesWatched = Object.keys(LOCAL_DATABASE.movies).length

  const totalMoviesMinWatched = Object.values(
    LOCAL_DATABASE.movies
  ).reduce<number>((totalTime, movie) => {
    totalTime += movie['time-min']
    return totalTime
  }, 0)

  const totalMovieHoursWatched = Math.round(totalMoviesMinWatched / 60)

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
        <div className="flex flex-row fill-current text-yellow-400 py-10 justify-around">
          <IconStar width="60px" />
          <IconStar width="60px" />
          <IconStar width="60px" />
          <IconStar width="60px" />
          <IconStar width="60px" />
        </div>
      </div>
      <div className="flex flex-col p-5 bg-xiketic text-light-yellow">
        <div className="grid grid-flow-cols grid-cols-2 gap-3 self-center w-1/2">
        <span className="font-staatliches text-7xl">
            {totalMoviesWatched}
          </span>
          <span className="font-staatliches text-7xl">
            {totalMovieHoursWatched}h
          </span>
          <span className='font-nunito'>Watched Movies</span>
          <span className='font-nunito'>Watched Movie Hours</span>
        </div>
        <div className="grid grid-flow-row grid-row-2 gap-3 mt-6 self-center w-full sm:w-1/2">
          <Link
            to="/project/movies/top-rated"
            className="bg-light-yellow text-xiketic py-4 px-6 rounded-full fill-current flex flex-row justify-between"
          >
            <span>Top Rated Movies</span>
            <IconChevronRight />
          </Link>
        </div>
      </div>
    </div>
  )
}
