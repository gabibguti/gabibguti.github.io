import React, { ReactElement } from 'react'
import IconCloudy from '../assets/IconCloudy'
import IconFire from '../assets/IconFire'
import IconRain from '../assets/IconRain'
import IconSun from '../assets/IconSun'

function WeatherIcon({
  weatherCode,
  temperature,
}: {
  weatherCode?: number
  temperature?: number
}): ReactElement | null {
  if (temperature && temperature >= 30) {
    return <IconFire />
  }

  switch (weatherCode) {
    case 0:
    case 1:
      return <IconSun />
    case 2:
    case 3:
      return <IconCloudy />
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return <IconRain />
    default:
      return null
  }
}

export default WeatherIcon
