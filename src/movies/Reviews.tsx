import React, { ReactElement } from "react"
import { SearchMovieResponse } from "./movieService"
import Spinner from "../utils/Spinner"
import { MOVIES } from "./Movies"
import { Movie } from "./movie"

export function Reviews({ isLoading, data }: { isLoading: boolean, data?: SearchMovieResponse }): ReactElement {
    if (isLoading) {
        return <Spinner />
    }

    if (!data || data.total_results === 0) {
        return (
            <span className='h-60 border-2 border-dotted border-dark-forest rounded-large content-center text-center text-dark-forest text-4xl'>
                No results.
            </span>
        )
    }

    const reviewedMovies = data.results.reduce<number[]>((result, curr) => {
        const reviewed = MOVIES["2022"].movies.find(dbMovie => {
            console.log(dbMovie['tmdb-id'])
            return dbMovie['tmdb-id'] === curr.id
        })
        return reviewed ? [...result, curr.id] : result
    }, [])

    return (
        <div className='grid grid-flow-cols grid-cols-4 gap-6 w-full'>
            {data?.results.slice(0, 8).map(movie =>
                <div className='flex flex-col items-center'>
                    <img
                        className={reviewedMovies.includes(movie.id) ?
                    'w-40 rounded-lg' :
                    'w-40 rounded-lg filter grayscale'
                        }
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    />
                    <span>{movie.original_title}</span>
                    <span>{movie.id}</span>
                </div>
            )}
        </div>
    )
}

