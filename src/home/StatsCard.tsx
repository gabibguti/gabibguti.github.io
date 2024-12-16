import React, { ReactElement } from 'react'
import type { Stats } from './home'

export function StatsCard({stats}: {stats: Stats}): ReactElement {
    const {name, number} = stats
    return (
        <div className='flex flex-col items-start'>
            <span className='font-gloock text-4xl'>{number}</span>
            <span className='font-martian-mono text-1xl'>{name}</span>
        </div>
    )
}