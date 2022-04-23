import React, { ReactElement } from 'react'
import IconFire from '../assets/IconFire'
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
    default:
      return null
  }
}

export default WeatherIcon
