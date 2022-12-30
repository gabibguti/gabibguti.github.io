import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { IconGitHub } from './assets/IconGitHub'
import { IconLinkedIn } from './assets/IconLinkedIn'

export function App(): ReactElement {
  return (
    <div className="bg-gradient-to-r from-aero-blue to-light-blue flex flex-col w-screen h-screen">
      <div className="flex flex-row px-6 py-4 justify-end">
        <div className="grid grid-flow-col grid-cols-2 gap-3">
          <a
            href="https://github.com/gabibguti"
            className="text-xiketic fill-current"
          >
            <IconGitHub />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriela-gutierrez-4213b0178/"
            className="text-xiketic fill-current"
          >
            <IconLinkedIn />
          </a>
        </div>
      </div>
      <div className="flex flex-col text-center justify-center items-center h-full">
        <span className="text-5xl font-bold text-xiketic">
          Gabriela Gutierrez
        </span>
        <span className="text-base font-light text-xiketic pt-4">
          Front-end developer
        </span>
        <span className="text-lg text-xiketic pt-10 max-w-2xl">
          Hello there! I am a <b>Software Engineer</b> with experience in
          bringing <b>UX designs</b> to life. Always dicussing the{' '}
          <b>best user experience</b> for the end users, focusing on the{' '}
          <b>interaction design</b>, and combining the back-end development with
          design ideas into <b>amazing digital products</b>! I can also develop{' '}
          <b>back-end APIs</b> and I risk myself out, once in a while, in{' '}
          <b>game development</b>.
        </span>
      </div>
      <div className="flex flex-col text-center justify-center items-center justify-self-end pb-5">
        <span className="text-xiketic text-sm font-bold uppercase pb-4">
          Little Projects
        </span>
        <Link
          to="/project/weather-forecast"
          className=" bg-gray-800 text-sm text-aero-blue font-bold uppercase py-2 px-4 rounded-full"
        >
          Weather Forecast
        </Link>
        <Link
          to="/project/movies"
          className=" bg-gray-800 text-sm text-aero-blue font-bold uppercase py-2 px-4 rounded-full mt-2"
        >
          Movies
        </Link>
      </div>
    </div>
  )
}
