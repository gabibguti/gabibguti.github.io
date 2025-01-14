import React, { ReactElement } from 'react'

export function Spinner(): ReactElement {
  return (
    <div className="border-2 border-t-2 rounded-full border-gray-700 border-t-transparent	animate-spin h-6 w-6" />
  )
}

