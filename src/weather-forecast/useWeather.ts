import { useQuery } from 'react-query'
import { fetcher } from '../utils'

export interface HourlyWeather {
  temperature: number
  time: Date
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
}

interface OpenMeteoRes {
  hourly_units: {
    temperature_2m: string
  }
  hourly: {
    temperature_2m: number[]
    time: string[]
  }
  current_weather: {
    time: string
    windspeed: number
    temperature: number
    weathercode: number
  }
}

export function useWeather(): Weather {
  const { data } = useQuery<OpenMeteoRes, Error>('todos', () =>
    fetcher<OpenMeteoRes>(
      'https://api.open-meteo.com/v1/forecast?latitude=-15.7801&longitude=-47.9292&hourly=temperature_2m&current_weather=true&timezone=America%2FSao_Paulo'
    )
  )

  if (!data) {
    return {}
  }

  const timeISO = data?.current_weather.time

  const time = new Date(timeISO)

  const temperature = data?.current_weather.temperature

  const temperatureUnit = data?.hourly_units.temperature_2m

  const windSpeed = data?.current_weather.windspeed

  const currHourIndex = data?.hourly.time.findIndex((hour) => hour === timeISO)

  const nextHours = data?.hourly.time.slice(
    currHourIndex + 1,
    currHourIndex + 4
  )

  const nextHoursForecast = nextHours.map((time, index) => ({
    temperature: data?.hourly.temperature_2m[index],
    time: new Date(time),
  }))

  const weatherCode = data?.current_weather.weathercode

  return {
    data: {
      currentWeather: { temperature, windSpeed, time, weatherCode },
      nextHoursForecast,
      temperatureUnit,
    },
  }
}
