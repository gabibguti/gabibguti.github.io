import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { FormattedDate, FormattedTime } from 'react-intl'
import IconFryingPan from '../assets/IconFryingPan'
import IconWind from '../assets/IconWind'
import { Spinner } from '../utils'
import cities from './cities.json'
import { useWeather } from './useWeather'
import WeatherIcon from './WeatherIcon'
import IconChevronLeft from '../assets/IconChevronLeft'
import { Link } from 'react-router-dom'
import { useHandleOutsideClick } from '../utils'
import { SelectLocation } from './SelectLocation'

export type City = keyof typeof cities

export function WeatherForecast(): ReactElement {
  const [city, setCity] = useState<City>('Rio de Janeiro')

  const { data, isLoading } = useWeather({ location: cities[city] })

  const windSpeedUnit = 'km/h'

  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-col bg-baby-blue items-center justify-center font-elsie py-5">
        <div className="flex w-full px-5">
          <div className="flex-none w-40 pt-4">
            <Link
              to="/"
              className="bg-white self-start font-atkinson text-xiketic py-4 px-6 rounded-full fill-current flex flex-row justify-around"
            >
              <IconChevronLeft />
              <span>Back</span>
            </Link>
          </div>
          <div className="flex-grow justify-center text-center">
            <span className="text-8xl text-xiketic text-center uppercase">
              Weather Forecast
            </span>
          </div>
          <div className="flex none w-40"></div>
        </div>
      </div>
      <div className="bg-xiketic flex flex-col p-5 font-atkinson w-1/3 w-full">
        <SelectLocation city={city} setCity={setCity} />
      </div>
      <div className="bg-white flex flex-col p-5 font-atkinson text-xiketic w-1/3 w-full">
        {isLoading ? (
          <span className="h-60 justify-items-center content-center fill-current text-4xl">
            <Spinner />
          </span>
        ) : (
          <div className="flex flex-col">
            <div className='flex flex-row pb-10 items-center'>
              {(data?.currentWeather.weatherCode ||
                data?.currentWeather.temperature) && (
                <span className="mr-5">
                  <WeatherIcon
                    weatherCode={data?.currentWeather.weatherCode}
                    width='64px'
                  />
                </span>
              )}
              <div className="text-6xl">
                {data?.currentWeather.temperature}&nbsp;{data?.temperatureUnit}
              </div>
            </div>
            <div className="flex flex-row">
              {data?.nextHoursForecast.map(
              ({ time, temperature, weatherCode }) => (
                <div className='flex flex-col mr-5'>
                  <div className='self-start'><FormattedTime value={time} /></div>
                  <div className='flex flex-row items-center mt-1'>
                    <span className="mr-3">
                      <WeatherIcon
                        weatherCode={weatherCode}
                        />
                    </span>
                    <div className="text-2xl">
                      {temperature}&nbsp;{data?.temperatureUnit}
                    </div>
                  </div>
                </div>
                )
              )}
            </div>
          </div>
      )}
      </div>
    </div>
  )
}
