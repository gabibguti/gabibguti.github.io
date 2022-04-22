import React, { ReactElement } from 'react'
import IconLocation from '../assets/IconLocation'
import { useWeather } from './useWeather'

export function WeatherForecast(): ReactElement {
  const { data } = useWeather()

  const city = 'Brasilia'

  return (
    <div className="flex flex-col w-screen h-screen p-9">
      <div className="flex flex-col items-center h-full">
        <span className="flex flex-row font-light text-xl text-xiketic items-center">
          <span className="pr-3">
            <IconLocation />
          </span>
          {city}
        </span>
        <span className="flex flex-row font-thin text-xiketic text-8xl py-6">
          {data?.temperature}&nbsp;{data?.temperatureUnit}
        </span>
      </div>
    </div>
  )
}