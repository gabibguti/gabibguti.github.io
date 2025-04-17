import React, { ReactElement } from 'react'
import IconCloudy from '../assets/IconCloudy'
import IconFire from '../assets/IconFire'
import IconRain from '../assets/IconRain'
import IconSun from '../assets/IconSun'
import IconThunderstorm from '../assets/IconThunderstorm'

function WeatherIcon({
  weatherCode,
  width = '24px'
}: {
  weatherCode?: number
  width?: string
}): ReactElement | null {
  switch (weatherCode) {
    case 0:
    case 1:
      return <IconSun width={width} />
    case 2:
    case 3:
      return <IconCloudy width={width} />
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return <IconRain width={width} />
    case 95:
    case 96:
    case 99:
      return <IconThunderstorm width={width} />
    default:
      return null
  }
}

export default WeatherIcon
