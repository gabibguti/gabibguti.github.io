import React, { ReactElement } from 'react'
import { YEAR } from './Movies'

export function Year({year, years, setYear}: { year: YEAR, years: YEAR[], setYear: (year: YEAR) => void}): ReactElement {
  return (
    <select
      className="rounded-md ring-4 ring-xiketic border-4 border-transparent bg-transparent text-xiketic p-1 text-4xl font-bold uppercase"
      onChange={(event) => setYear(event.target.value as YEAR)}
    >
      {years.map((year_option) => (
        <option className="text-base font-normal" selected={year===year_option} value={year_option}>{year_option}</option>
      ))}
    </select>
  )
}



