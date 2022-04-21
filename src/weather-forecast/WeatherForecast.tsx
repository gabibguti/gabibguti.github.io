import React, { ReactElement } from 'react'

export function WeatherForecast(): ReactElement {
  return (
    <div className="flex flex-col w-screen h-screen p-6">
      <div className="flex flex-col items-center text-center h-full">
        <span className="text-4xl font-extralight text-xiketic pb-4">
          Weather Forecast
        </span>
      </div>
    </div>
  )
}
