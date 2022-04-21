import React, { ReactElement } from 'react'
import { useWeather } from './useWeather'

export function WeatherForecast(): ReactElement {
  const { data } = useWeather()

  return (
    <div className="flex flex-col w-screen h-screen p-9">
      <div className="flex flex-col items-center text-center h-full">
        <span className="text-4xl font-extralight text-xiketic pb-6">
          Weather Forecast
        </span>
        <span className="text-3xl font-extralight text-xiketic">
          {data?.temperature}&nbsp;{data?.temperatureUnit} Brasilia
        </span>
      </div>
    </div>
  )
}
