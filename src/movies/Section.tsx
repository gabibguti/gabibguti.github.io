import React, { ReactElement } from 'react'

export function Section({ title }: { title: string }): ReactElement {
  return (
    <div className="w-full rounded-md bg-gray-800 text-aero-blue mb-2 py-5 px-5">
      <span className="text-2xl font-bold uppercase">{title}</span>
    </div>
  )
}
