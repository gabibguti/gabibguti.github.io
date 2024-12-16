import React, { ReactElement } from 'react'
import type { Stats } from './home'
import { StatsCard } from './StatsCard'

export function StatsCards({cards}: {cards: Stats[]}): ReactElement {
    return (
        <div className="grid grid-flow-row grid-rows-1 sm:grid-flow-col sm:grid-cols-3 gap-6 w-full">
            {cards.map(stats => <StatsCard stats={stats} />)}
        </div>
    )
}