import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import IconChevronLeft from '../assets/IconChevronLeft'
import { Type } from './Chips'
import { Movie } from './movie'
import LOCAL_DATABASE from './movies.json'
import { ReviewCard } from './Reviews'

export function TopMovies(): ReactElement {
  const localMovies = LOCAL_DATABASE.movies as { [key: string]: Movie }
  const topMovieIds = Object.keys(localMovies).reduce<
    { id: number; type: Type }[]
  >((acc, movieId) => {
    return localMovies[movieId].top === true
      ? [...acc, { id: Number(movieId), type: 'movie' }]
      : acc
  }, [])

  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-col bg-xiketic items-center justify-center font-staatliches py-5">
        <div className="flex w-full px-5">
          <div className="flex-none w-40 pt-4">
            <Link
              to="/project/movies"
              className="bg-light-yellow self-start font-nunito text-xiketic py-4 px-6 rounded-full fill-current flex flex-row justify-around"
            >
              <IconChevronLeft />
              <span>Back</span>
            </Link>
          </div>
          <div className="flex-grow justify-center text-center">
            <span className="text-9xl text-orange text-center">
              Top Rated Movies
            </span>
          </div>
          <div className="flex none w-40"></div>
        </div>
      </div>
      <span className="flex flex-col bg-xiketic font-nunito p-5 text-light-yellow text-lg">
        Movies that pique my curiosity with intriguing mysteries, often
        featuring unexpected twists or mind-bending narratives.
      </span>
      <div className="flex flex-col p-5 bg-xiketic text-light-yellow">
        <div className="grid grid-flow-cols grid-cols-2 gap-6 w-full">
          {topMovieIds?.map((res) => (
            <ReviewCard
              result={res}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
