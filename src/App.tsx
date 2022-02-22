import React, { ReactElement } from 'react'
import { IconGitHub } from './assets/IconGitHub'
import { IconLinkedIn } from './assets/IconLinkedIn'

export function App(): ReactElement {
  return (
    <div className="bg-gradient-to-r from-dark-cornflower-blue to-light-blue flex flex-col w-screen h-screen">
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
          {`Hello there! I am a Software Engineer with experience in bringing UX designs to life.
          Always dicussing the best user experience for the end users, focusing on the interaction design,
          and combining the back-end development with the design ideas into amazing digital products!
          I can also develop back-end APIs and I risk myself out, once in a while, in game development.`}
        </span>
      </div>
    </div>
  )
}
