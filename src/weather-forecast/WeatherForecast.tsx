import React, { ReactElement } from 'react'
import { FormattedDate, FormattedTime } from 'react-intl'
import IconLocation from '../assets/IconLocation'
import IconWind from '../assets/IconWind'
import { useWeather } from './useWeather'

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
        <span className="flex flex-row font-thin text-xiketic text-8xl py-6">
          {data?.currentWeather.temperature}&nbsp;{data?.temperatureUnit}
        </span>
        <span className="flex flex-row font-light text-lg text-xiketic items-center">
          <span className="pr-3">
            <IconWind />
          </span>
          {data?.currentWeather.windSpeed}&nbsp;
          <span className="tracking-wider">{windSpeedUnit}</span>
        </span>
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
              </tr>
            </thead>
            <tbody>
              {data?.nextHoursForecast.map(({ time, temperature }, index) => (
                <tr key={index}>
                  <td className="text-right">{temperature}</td>
                  <td>{data?.temperatureUnit}</td>
                  <td className="text-right w-24">
                    <FormattedTime value={time} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
