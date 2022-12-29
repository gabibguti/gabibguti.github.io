import React, { ReactElement } from 'react'
import { TotalizerBox } from './TotalizerBox'

export function Movies(): ReactElement {
  return (
    <div className="bg-gradient-to-r from-aero-blue to-light-blue flex flex-col w-screen h-screen p-9">
      <div className="flex flex-col items-center h-full">
        <div className="h-32 grid grid-rows-1 grid-cols-3 gap-4 w-full">
          <TotalizerBox title="Total movies watched" total={100} />
          <TotalizerBox title="Total TV Shows watched" total={100} />
          <TotalizerBox title="Total hours watched" total={100} unit="hour" />
        </div>
      </div>
    </div>
  )
}

// TODO:
// Total movies watched
// Total tv shows watched
// Total hours watched

// Best movies

// Series classification
// Movies classification
// Best horror movies

// Best movies overtime
