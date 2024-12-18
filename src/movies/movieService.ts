import { useQuery } from "react-query"
import { fetcher } from "../utils/fetcher";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjI1ZDBkOTEyZjhmZGEyYjZmNTIzNWY5OGFiNGI4ZiIsIm5iZiI6MTczNDQ4NjE1OS43MzUwMDAxLCJzdWIiOiI2NzYyMjg4ZjhkMWNmZGM1MjI0YTFkNTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tK0Lomsyb7GQBYlE7wDTc2KUDXR3V-2lO2Y1s4Necxk"

interface SearchMovieResponse {
    page: number; // The page number of the results.
    total_results: number; // The total number of results available.
    total_pages: number; // The total number of pages of results.
    results: SearchMovie[];
}

export interface SearchMovie {
    poster_path: string | null; // The path to the movie poster image (null if not available).
    adult: boolean; // Whether the movie is for adults.
    overview: string; // A short overview of the movie.
    release_date: string; // The release date of the movie in 'YYYY-MM-DD' format.
    genre_ids: number[]; // Genre IDs of the movie. (Use the /genre/list endpoint to get the genre names)
    id: number; // The movie ID.
    original_title: string; // The original title of the movie.
    original_language: string; // The original language of the movie.
    title: string; // The title of the movie.
    backdrop_path: string | null; // The path to the movie backdrop image (null if not available).
    popularity: number; // The popularity score of the movie.
    vote_count: number; // The number of votes the movie has received.
    video: boolean; // Whether the movie has a video.
    vote_average: number; // The average vote rating of the movie.
}

export function useGetMovie(movieName: string) {
    const init: RequestInit = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + API_KEY
        }
    }

    const searchParams: Record<string, any> = new URLSearchParams();

    searchParams.append("query", movieName)
    searchParams.append("include_adult", false)
    searchParams.append("language", "en-US")
    searchParams.append("page", 1)

    const baseUrl = new URL("https://api.themoviedb.org/3/search/movie");

    baseUrl.search = searchParams.toString();

    return useQuery<SearchMovieResponse, Error>(
        ['movies', movieName],
        () =>
            fetcher<SearchMovieResponse>(baseUrl.toString(), init),
        {}
    )
}