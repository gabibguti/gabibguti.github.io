import React, { ReactElement } from 'react'
import IconCheck from '../assets/IconCheck'
import IconClose from '../assets/IconClose'

export type Type = 'movie' | 'tv-show'
export type SelectType = { movie: boolean; 'tv-show': boolean }

function Chip({
  name,
  value,
  selected,
  setSelected,
}: {
  name: string
  value: Type
  selected: SelectType
  setSelected: (s: SelectType) => void
}) {
  const isSelected = selected[value]
  const selectChip = () => {
    setSelected({ ...selected, [value]: !isSelected })
  }

  return (
    <button
      className={`w-44 flex flex-row items-center justify-around rounded-large text-xl fill-current px-6 py-4 ring-1 ring-moss-green "
                    ${
                      isSelected
                        ? 'bg-moss-green text-white'
                        : 'bg-white text-dark-forest'
                    }`}
      onClick={() => selectChip()}
    >
      {isSelected ? <IconCheck /> : <IconClose />}
      <span>{name}</span>
    </button>
  )
}

export function Chips({
  selected,
  setSelected,
}: {
  selected: SelectType
  setSelected: (s: SelectType) => void
}): ReactElement {
  return (
    <div className="grid grid-flex-cols grid-cols-2 gap-3 pl-5">
      <Chip
        name="Movies"
        value="movie"
        selected={selected}
        setSelected={setSelected}
      />
      <Chip
        name="TV Shows"
        value="tv-show"
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  )
}
