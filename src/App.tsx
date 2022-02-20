import React, { ReactElement } from 'react'
import { IconGitHub } from './assets/IconGitHub'

export function App(): ReactElement {
  return (
    <div className="bg-gradient-to-r from-light-blue to-dark-cornflower-blue flex flex-col w-screen h-screen">
      <div className="flex flex-row p-4 justify-end text-xiketic fill-current">
        <IconGitHub />
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
