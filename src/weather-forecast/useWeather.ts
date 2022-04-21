import { useQuery } from 'react-query'
import { fetcher } from '../utils'

interface CurrentWeather {
  data?: { temperature?: number; temperatureUnit: string }
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

  const currentTime = data?.current_weather.time

  const currentTimeIndex = data?.hourly.time.findIndex(
    (time) => time === currentTime
  )

  const currentTemperature = data?.hourly.temperature_2m.at(currentTimeIndex)

  const temperatureUnit = data?.hourly_units.temperature_2m

  return { data: { temperature: currentTemperature, temperatureUnit } }
}
