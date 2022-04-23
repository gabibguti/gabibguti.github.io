import React, { ReactElement } from 'react'
import { FormattedDate, FormattedTime } from 'react-intl'
import IconFryingPan from '../assets/IconFryingPan'
import IconLocation from '../assets/IconLocation'
import IconWind from '../assets/IconWind'
import { useWeather } from './useWeather'
import WeatherIcon from './WeatherIcon'

export function WeatherForecast(): ReactElement {
  const { data } = useWeather()

  const city = 'Brasilia'
  const windSpeedUnit = 'km/h'

  return (
    <div className="flex flex-col w-screen h-screen p-9">
      <div className="flex flex-col items-center h-full">
        <span className="flex flex-row font-light text-xl text-xiketic items-center">
          <span className="pr-3">
            <IconLocation />
          </span>
          {city}
        </span>
        <span className="flex flex-row font-light text-sm text-xiketic items-center pt-4">
          <FormattedDate
            value={data?.currentWeather.time}
            year="numeric"
            month="long"
            day="2-digit"
            hour="numeric"
            minute="numeric"
            hour12={true}
          />
        </span>
        <span className="flex flex-row font-thin text-xiketic py-6">
          <span className="text-8xl">
            {data?.currentWeather.temperature}&nbsp;{data?.temperatureUnit}
          </span>
          {(data?.currentWeather.weatherCode ||
            data?.currentWeather.temperature) && (
            <span className="pl-4">
              <WeatherIcon
                weatherCode={data?.currentWeather.weatherCode}
                temperature={data?.currentWeather.temperature}
              />
            </span>
          )}
        </span>

        <div className="h-64 grid grid-cols-2 grid-flow-col gap-4 font-light text-lg text-xiketic ">
          <div className="flex flex-row items-center justify-center">
            <span className="pr-3">
              <IconWind />
            </span>
            {data?.currentWeather.windSpeed}&nbsp;
            <span className="tracking-wider">{windSpeedUnit}</span>
          </div>
          <div>
            <div className="flex flex-row items-center justify-center tooltip">
              <span className="pr-3">
                <IconFryingPan />
              </span>
              {data && data?.currentWeather.temperature >= 40 ? 'Yes' : 'No'}
              <span className="tooltiptext">
                {data && data?.currentWeather.temperature >= 40
                  ? 'Can fry eggs on asfalt today!'
                  : 'Cannot fry eggs on the asfalt today'}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-xiketic items-center pt-14">
          <span className="text-sm font-semibold uppercase pb-4">
            Next Hours
          </span>
          <table className="table-auto font-light">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.nextHoursForecast.map(
                ({ time, temperature, weatherCode }, index) => (
                  <tr key={index}>
                    <td className="text-right">{temperature}</td>
                    <td>{data?.temperatureUnit}</td>
                    <td className="px-4 h-5">
                      <WeatherIcon
                        weatherCode={weatherCode}
                        temperature={temperature}
                      />
                    </td>
                    <td className="text-right">
                      <FormattedTime value={time} />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
