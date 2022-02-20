import React, { ReactElement } from 'react'
import { IconGitHub } from './assets/IconGitHub'
import { IconLinkedIn } from './assets/IconLinkedIn'

export function App(): ReactElement {
  return (
    <div className="bg-gradient-to-r from-light-blue to-dark-cornflower-blue flex flex-col w-screen h-screen">
      <div className="flex flex-row p-4 justify-end">
        <div className="grid grid-flow-col grid-cols-2 gap-2 text-xiketic fill-current">
          <a href="https://github.com/gabibguti">
            <IconGitHub />
          </a>
          <a href="https://www.linkedin.com/in/gabriela-gutierrez-4213b0178/">
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
      </div>
    </div>
  )
}
