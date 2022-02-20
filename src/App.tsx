import React, { ReactElement } from 'react'

export function App(): ReactElement {
  return (
    <div className="bg-gradient-to-r from-light-blue to-dark-cornflower-blue flex justify-center items-center px-24 w-screen h-screen">
      <div className="flex flex-col text-center">
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
