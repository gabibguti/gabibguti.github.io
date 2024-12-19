import React, { ReactElement, useEffect, useState } from 'react'
import { FormattedList } from 'react-intl'
import Spinner from '../utils/Spinner'
import { SelectType } from './Chips'
import { Movie, TVShow } from './movie'
import LOCAL_DATABASE from './movies.json'
import {
  GenreResponse,
  SearchMovie,
  SearchMovieResponse,
  SearchTvShow,
  SearchTvShowResponse,
  useGetMovieDetails,
} from './movieService'

interface ReviewResult {
  id: number
  original_title: string
  poster_path: string | null
  release_date: string | null
  genre_ids: number[]
  'grade-imdb'?: number
  'grade-gabriela'?: number
  'strong-points'?: string | null
  'weak-points'?: string | null
  'recommended-by'?: string[] | null
  rewatch?: boolean
  top?: boolean
}

function buildReviewResultFromSearchMovie(value: SearchMovie): ReviewResult {
  const localMovies = LOCAL_DATABASE.movies as { [key: string]: Movie }
  const review =
    String(value.id) in localMovies ? localMovies[String(value.id)] : undefined

  return {
    id: value.id,
    original_title: value.original_title,
    poster_path: value.poster_path,
    release_date: value.release_date,
    genre_ids: value.genre_ids,
    'grade-imdb': review?.['grade-imdb'],
    'grade-gabriela': review?.['grade-gabriela'],
    'strong-points': review?.['strong-points'],
    'weak-points': review?.['weak-points'],
    'recommended-by': review?.['recommended-by'],
    rewatch: review?.rewatch,
    top: review?.top,
  }
}

function buildReviewResultFromSearchTVShow(value: SearchTvShow): ReviewResult {
  const localTVShows = LOCAL_DATABASE.tv_shows as { [key: string]: TVShow }
  const review =
    String(value.id) in localTVShows
      ? localTVShows[String(value.id)]
      : undefined

  return {
    id: value.id,
    original_title: value.original_name,
    poster_path: value.poster_path,
    release_date: value.first_air_date,
    genre_ids: value.genre_ids,
    'grade-imdb': review?.['grade-imdb'],
    'grade-gabriela': review?.['grade-gabriela'],
    'strong-points': review?.['strong-points'],
    'weak-points': review?.['weak-points'],
    'recommended-by': review?.['recommended-by'],
    rewatch: review?.rewatch,
    top: review?.top,
  }
}

export function Reviews({
  emptyQuery,
  isLoading,
  movieData,
  tvShowData,
  selected,
  movieGenres,
}: {
  emptyQuery: boolean
  isLoading: boolean
  movieData?: SearchMovieResponse
  tvShowData?: SearchTvShowResponse
  selected: SelectType
  movieGenres?: GenreResponse
}): ReactElement {
  if (isLoading) {
    return (
      <span className="h-60 border-2 border-dotted border-dark-forest rounded-large justify-items-center content-center text-dark-forest fill-current text-4xl">
        <Spinner />
      </span>
    )
  }

  if (emptyQuery) {
    return (
      <span className="h-60 border-2 border-dotted border-dark-forest rounded-large content-center text-center text-dark-forest text-4xl">
        Start searching!
      </span>
    )
  }

  return (
    <ReviewResults
      movieData={movieData}
      tvShowData={tvShowData}
      selected={selected}
      movieGenres={movieGenres}
    />
  )
}

export function ReviewResults({
  movieData,
  tvShowData,
  selected,
  movieGenres,
}: {
  movieData?: SearchMovieResponse
  tvShowData?: SearchTvShowResponse
  selected: SelectType
  movieGenres?: GenreResponse
}): ReactElement {
  const [results, setResults] = useState<ReviewResult[]>()

  useEffect(() => {
    let res: ReviewResult[] = []
    if (selected.movie && movieData) {
      res = [
        ...movieData.results.slice(0, 4).map(buildReviewResultFromSearchMovie),
      ]
    }
    if (selected['tv-show'] && tvShowData) {
      res = [
        ...res,
        ...tvShowData.results
          .slice(0, 4)
          .map(buildReviewResultFromSearchTVShow),
      ]
    }
    res.sort((a, b) => {
      if (a['grade-gabriela']) {
        return -1
      }
      if (b['grade-gabriela']) {
        return 1
      }
      return 0
    })
    setResults(res)
  }, [selected, movieData, tvShowData, movieData?.results, tvShowData?.results])

  if (!results || results?.length === 0) {
    return (
      <span className="h-60 border-2 border-dotted border-dark-forest rounded-large content-center text-center text-dark-forest text-4xl">
        No results.
      </span>
    )
  }

  return (
    <div className="grid grid-flow-cols grid-cols-2 gap-6 w-full">
      {results?.map((reviewResult) => (
        <ReviewCard reviewResult={reviewResult} movieGenres={movieGenres} />
      ))}
    </div>
  )
}

function ReviewCard({
  reviewResult,
  movieGenres,
}: {
  reviewResult: ReviewResult
  movieGenres?: GenreResponse
}) {
  const { data: movieDetails } = useGetMovieDetails(reviewResult.id)

  const genres = reviewResult.genre_ids.reduce<string[]>((acc, genre_id) => {
    const g = movieGenres?.genres.find((genre) => genre.id === genre_id)
    if (!g) {
      return acc
    }
    return [...acc, g.name]
  }, [])

  const isReviewed = !!reviewResult['grade-gabriela']

  return (
    <div className="flex flex-row bg-dark-forest text-white rounded-lg p-5">
      <img
        className={`w-48 h-80 object-cover rounded-lg ${
          isReviewed ? '' : 'filter grayscale'
        }`}
        alt={reviewResult.original_title + ' poster'}
        src={`https://image.tmdb.org/t/p/w400/${reviewResult.poster_path}`}
      />
      <div className="flex flex-col pl-5 w-full">
        <div className="grid grid-cols-7 gap-2 font-nunito">
          <div className="col-span-8">
            <span className="font-staatliches text-3xl pb-2 text-ellipsis overflow-hidden">
              {reviewResult.original_title}
            </span>
          </div>
          <div className="col-span-8">
            <div className="flex flex-col">
              <div className="flex flex-row gap-2 py-2">
                {genres.map((genre) => (
                  <div className="text-xs rounded-full px-2 ring-1 ring-white">
                    {genre}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1 col-start-1">
            <div className="flex flex-col">
              <span className="text-xs">Year</span>
              <span>
                {reviewResult.release_date
                  ? new Date(reviewResult.release_date).getFullYear()
                  : '-'}
              </span>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col">
              <span className="text-xs">Runtime</span>
              <span>
                {movieDetails?.runtime ? `${movieDetails?.runtime} min` : '-'}
              </span>
            </div>
          </div>
          {isReviewed && (
            <>
              <div className="col-span-2">
                <div className="flex flex-col">
                  <span className="text-xs font-bold">IMDB Grade</span>
                  <span className="font-bold">
                    {reviewResult?.['grade-imdb']}
                  </span>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex flex-col">
                  <span className="text-xs font-bold">Gabriela's Grade</span>
                  <span className="font-bold">
                    {reviewResult?.['grade-gabriela']}
                  </span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col">
                  <span className="text-xs font-bold">Rewatch?</span>
                  <span>{reviewResult?.rewatch ? 'Yes' : 'No'}</span>
                </div>
              </div>
              <div className="col-span-7 col-start-1">
                <div className="flex flex-col">
                  <span className="text-xs font-bold">Strong points</span>
                  <span>{reviewResult?.['strong-points'] ?? '-'}</span>
                </div>
              </div>
              <div className="col-span-7 col-start-1">
                <div className="flex flex-col">
                  <span className="text-xs font-bold">Weak points</span>
                  <span>
                    {!!reviewResult?.['weak-points']
                      ? reviewResult?.['weak-points']
                      : '-'}
                  </span>
                </div>
              </div>
              <div className="col-span-7 col-start-1">
                <div className="flex flex-col">
                  <span className="text-xs">Recommended by</span>
                  <span className="rounded-md">
                    {reviewResult?.['recommended-by']?.length ? (
                      <FormattedList
                        type="conjunction"
                        value={reviewResult?.['recommended-by'] as string[]}
                      />
                    ) : (
                      '-'
                    )}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <span>{reviewResult.id}</span>
    </div>
  )
}