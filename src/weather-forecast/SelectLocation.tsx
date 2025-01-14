import React, { ReactElement, useRef, useState } from 'react'
import { useHandleOutsideClick } from '../utils'
import { City } from './WeatherForecast'
import cities from './cities.json'
import IconExpand from '../assets/IconExpand'

export function SelectLocation({
  city,
  setCity,
}: {
  city: City
  setCity: (city: City) => void
}): ReactElement {
  const [showLocationList, setShowLocationList] = useState<boolean>(false)
  const locationSelectRef = useRef(null)
  const locationListRef = useRef(null)
  useHandleOutsideClick({
    refs: [locationListRef, locationSelectRef],
    onOutsideClick: () => {
      setShowLocationList(false)
    },
  })

  return (
    <div className='flex flex-row'>
      <label
        id="listbox-label"
        className="block font-medium text-2xl font-elsie text-baby-blue content-center"
      >
        Choose a location!
      </label>
      <div className="relative ml-5 w-1/3">
        <button
          type="button"
          className="flex w-full bg-white rounded-md py-2 pl-3 pr-2 text-left text-xiketic pointer justify-between border border-black"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          ref={locationSelectRef}
          onClick={() => {
            setShowLocationList(!showLocationList)
          }}
        >
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <span className="block truncate">{city}</span>
          </span>
          <IconExpand />
        </button>
        <ul
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          tab-index="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
          hidden={!showLocationList}
          ref={locationListRef}
        >
          {Object.keys(cities).map((city) => {
            return (
              <li
                className="relative cursor-pointer hover:bg-baby-blue select-none py-2 pl-3 pr-9 text-gray-900"
                id="listbox-option-0"
                role="option"
                onClick={(e) => {
                  setShowLocationList(false)
                  setCity(city as City)
                }}
              >
                <div className="flex items-center">
                  <span className="ml-3 block truncate font-normal">
                    {city}
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
