import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { IconGitHub } from './assets/IconGitHub'
import { IconLinkedIn } from './assets/IconLinkedIn'
import { StatsCards } from './home/StatsCards'
import { Stats } from './home/home'
import IconChevron from './assets/IconChevron'

export function App(): ReactElement {
  const cards: Stats[] = [
    { name: 'Years as SWE', number: 4 },
    { name: 'Theater plays', number: 2 },
    { name: 'Visited countries', number: 11 },
  ]
  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-col text-center justify-center items-center h-full">
        <span className="font-gloock uppercase text-dark-ruby text-6xl sm:text-9xl font-light m-12">
          Gabriela
        </span>
        <div className="text-white p-5 w-full bg-midnight-sky">
          <span className="font-martian-mono text-lg">
            A passionate artist and skilled software engineer, pushing the boundaries of digital and physical creation.
          </span>
          <div className="flex flex-row justify-center mt-5">
            <div className="grid grid-flow-col grid-cols-2 gap-6">
              <a
                href="https://github.com/gabibguti"
                className="fill-current"
              >
                <IconGitHub />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriela-gutierrez-4213b0178/"
                className="fill-current"
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row p-5 sm:p-8 w-full sm:w-2/3">
          <StatsCards cards={cards} />
        </div>
        {/* <div className='flex flex-row w-full my-5'> */}
        <img src="assets/DSC01019.JPG" alt="Gabriela in Central Park, New York" className='h-auto w-40 p-5 w-full sm:w-2/3 rounded-large' />
        {/* </div> */}
        <div className='flex flex-col p-5 font-martian-mono w-full'>
          <span className="text-lg text-rose">
            Uncover my little personal projects: a retrospective of my favorite movies and a weather forecast.
          </span>
          <div className="grid grid-flow-row grid-row-2 gap-3 mt-6 self-center w-full sm:w-1/2">
            <Link
              to="/project/movies"
              className="bg-rose text-white py-4 px-6 rounded-full fill-current flex flex-row justify-between"
            >
              <span>Movies</span>
              <IconChevron />
            </Link>
            <Link
              to="/project/weather-forecast"
              className="ring-rose ring-2 text-rose py-4 px-6 rounded-full fill-current flex flex-row justify-between"
            >
              <span>Weather Forecast</span>
              <IconChevron />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
