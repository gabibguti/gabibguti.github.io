import React, { ReactElement } from 'react'

export function TotalizerBox({
  title,
  total,
  unit,
}: {
  title: string
  total: number
  unit?: 'hour'
}): ReactElement {
  return (
    <div className="bg-green-50 rounded-md flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div>
          <span className="text-l text-xiketic font-light uppercase">
            {title}
          </span>
        </div>
        <div>
          <span className="text-xiketic font-medium uppercase">
            <span className="text-3xl">{total}</span>
            {unit ? <span className="text-l"> h</span> : null}
          </span>
        </div>
      </div>
    </div>
  )
}
