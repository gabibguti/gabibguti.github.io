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
            <div className='flex flex-row pb-5 items-center'>
            {(data?.currentWeather.weatherCode ||
              data?.currentWeather.temperature) && (
              <span className="mr-5">
                <WeatherIcon
                  weatherCode={data?.currentWeather.weatherCode}
                />
              </span>
            )}
            <div className="text-6xl">
              {data?.currentWeather.temperature}&nbsp;{data?.temperatureUnit}
            </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-1/3"></div>
            </div>
          </div>
        )}
      </div>
    </div>
    //     <div className="flex flex-col h-full min-w-min items-center justify-center">
    //       {isLoading ? (
    //         <Spinner />
    //       ) : (
    //         <>
    //           <div className="flex flex-col items-center justify-self-center m-auto">
    //             <span className="flex flex-row font-thin text-xiketic pb-6">
    //               <span className="text-8xl">
    //                 {data?.currentWeather.temperature}&nbsp;
    //                 {data?.temperatureUnit}
    //               </span>
    //               {(data?.currentWeather.weatherCode ||
    //                 data?.currentWeather.temperature) && (
    //                 <span className="pl-4">
    //                   <WeatherIcon
    //                     weatherCode={data?.currentWeather.weatherCode}
    //                     temperature={data?.currentWeather.temperature}
    //                   />
    //                 </span>
    //               )}
    //             </span>

    //             <div className="h-8 grid grid-cols-2 grid-flow-col gap-4 font-light text-lg text-xiketic ">
    //               <div className="flex flex-row items-center justify-center">
    //                 <span className="pr-3">
    //                   <IconWind />
    //                 </span>
    //                 {data?.currentWeather.windSpeed}&nbsp;
    //                 <span className="tracking-wider">{windSpeedUnit}</span>
    //               </div>
    //               <div className="flex flex-row items-center justify-center tooltip">
    //                 <span className="pr-3">
    //                   <IconFryingPan />
    //                 </span>
    //                 {data && data?.currentWeather.temperature >= 40
    //                   ? 'Yes'
    //                   : 'No'}
    //                 <span className="tooltiptext">
    //                   {data && data?.currentWeather.temperature >= 40
    //                     ? 'Can fry eggs on asfalt today!'
    //                     : 'Cannot fry eggs on the asfalt today'}
    //                 </span>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="flex flex-col text-xiketic items-center justify-self-end">
    //             <span className="text-sm font-semibold uppercase pb-4">
    //               Next Hours
    //             </span>
    //             <table className="table-auto font-light">
    //               <thead>
    //                 <tr>
    //                   <th></th>
    //                   <th></th>
    //                   <th></th>
    //                   <th></th>
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                 {data?.nextHoursForecast.map(
    //                   ({ time, temperature, weatherCode }, index) => (
    //                     <tr key={index}>
    //                       <td className="text-right">{temperature}</td>
    //                       <td>{data?.temperatureUnit}</td>
    //                       <td className="px-4 h-5">
    //                         <WeatherIcon
    //                           weatherCode={weatherCode}
    //                           temperature={temperature}
    //                         />
    //                       </td>
    //                       <td className="text-right">
    //                         <FormattedTime value={time} />
    //                       </td>
    //                     </tr>
    //                   )
    //                 )}
    //               </tbody>
    //             </table>
    //           </div>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </div>
  )
}
