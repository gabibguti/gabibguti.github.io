import { useQuery } from 'react-query'
import { fetcher } from '../utils'

interface CurrentWeather {
  data?: {
    temperature: number
    temperatureUnit: string
    windSpeed: number
    time: Date
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
  }
}

export function useWeather(): CurrentWeather {
  const { data } = useQuery<OpenMeteoRes, Error>('todos', () =>
    fetcher<OpenMeteoRes>(
      'https://api.open-meteo.com/v1/forecast?latitude=-15.7801&longitude=-47.9292&hourly=temperature_2m&current_weather=true&timezone=America%2FSao_Paulo'
    )
  )

  if (!data) {
    return {}
  }

  const time = new Date(data?.current_weather.time)

  const temperature = data?.current_weather.temperature

  const temperatureUnit = data?.hourly_units.temperature_2m

  const windSpeed = data?.current_weather.windspeed

  return {
    data: { temperature, temperatureUnit, windSpeed, time },
  }
}
