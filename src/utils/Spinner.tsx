import React, { ReactElement } from 'react'

function Spinner(): ReactElement {
  return (
    <div className="border-2 border-t-2 rounded-full border-gray-700 border-t-transparent	animate-spin h-6 w-6" />
  )
}

export default Spinner
