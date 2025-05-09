import { useState } from 'react'
import { useQuery } from 'react-query'
import { fetcher } from '../utils'

export interface HourlyWeather {
  temperature: number
  time: Date
  weatherCode: number
}

interface CurrentWeather {
  temperature: number
  windSpeed: number
  time: Date
  weatherCode: number
}

interface Weather {
  data?: {
    currentWeather: CurrentWeather
    nextHoursForecast: Array<HourlyWeather>
    temperatureUnit: string
  }
  isLoading: boolean
}

interface OpenMeteoRes {
  hourly_units: {
    temperature_2m: string
  }
  hourly: {
    temperature_2m: number[]
    time: string[]
    weathercode: number[]
  }
  current_weather: {
    time: string
    windspeed: number
    temperature: number
    weathercode: number
  }
}

interface Location {
  latitude: number
  longitude: number
}

export function useWeather({ location }: { location: Location }): Weather {
  const [data, setData] = useState<Weather['data']>()

  const { isLoading } = useQuery<OpenMeteoRes, Error>(
    ['weather', location],
    () =>
      fetcher<OpenMeteoRes>(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,weathercode&current_weather=true&timezone=America%2FSao_Paulo`
      ),
    {
      onSuccess: (data) => {
        const timeISO = data?.current_weather.time

        const time = new Date(timeISO)

        const temperature = data?.current_weather.temperature

        const temperatureUnit = data?.hourly_units.temperature_2m

        const windSpeed = data?.current_weather.windspeed

        const currHourIndex = data?.hourly.time.findIndex(
          (hour) => hour === timeISO
        )

        const nextHours = data?.hourly.time.slice(
          currHourIndex + 1,
          currHourIndex + 4
        )

        const nextHoursForecast = nextHours.map((time, index) => ({
          temperature: data?.hourly.temperature_2m[index],
          time: new Date(time),
          weatherCode: data?.hourly.weathercode[index],
        }))

        const weatherCode = data?.current_weather.weathercode

        setData({
          currentWeather: { temperature, windSpeed, time, weatherCode },
          nextHoursForecast,
          temperatureUnit,
        })
      },
    }
  )

  return {
    data,
    isLoading,
  }
}
