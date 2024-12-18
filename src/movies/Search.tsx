import React, { ReactElement, useState } from 'react'
import IconSearch from '../assets/IconSearch';

export function Search({
    searchMovie,
}: {
    searchMovie: (movieName: string) => void,
}): ReactElement {
    const [value, setValue] = useState<string>("")
    return (
        <label className="relative block w-1/2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 fill-current">
                <IconSearch />
            </span>
            <input className='w-full ring-moss-green ring-1 rounded-full text-2xl px-6 py-4 pl-16'
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        searchMovie(value)
                    }
                }}
                placeholder="Search for a movie or TV show"
            >
            </input>
        </label>
    )
}