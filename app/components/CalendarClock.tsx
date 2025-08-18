import { useEffect, useState } from "react";
import { Clock } from "./Clock";
import { CalendarHour } from "./CalendarHour";
import React from "react";

/**
 * @author Ken Cacciabue
 * @date 83.08.2025
 * @name MainBox
 * @description
 * Composant which is composed of a calendar and a clock
 * 
 */
export function CalendarClock({ key, compDiv = 1 }: { key?: number, compDiv?: number }) {
  const [currentBoxH, setCurrentBoxH] = useState(0)
  const [currentBoxW, setCurrentBoxW] = useState(0)

  const [parentBoxH, setParentBoxH] = useState(0)
  const [parentBoxW, setParentBoxW] = useState(0)
  
  useEffect(() => {

    setInterval(() => {
      const clock = document.getElementById('CalendarClock')
      if (clock) {
        setCurrentBoxH(clock.offsetHeight)
        setCurrentBoxW(clock.offsetWidth)

        const clockParent = clock.parentElement
        if (clockParent) {
          setParentBoxH(clockParent.offsetHeight)
          setParentBoxW(clockParent.offsetWidth)
        }
      }

    }, 1)
  }, [])

  let compStyle = 'h-full w-full'
  if (typeof compDiv === 'number') {

    let h = ' h-1/' + compDiv.toString()
    let w = ' w-1/' + compDiv.toString()
    compStyle = h + w
  }

  
  return (
    <main id="CalendarClock" className="flex flex-col items-center justify-center h-full" style={{ height: parentBoxH / compDiv, fontSize: ((currentBoxW + currentBoxH) / 2 / 10) , paddingLeft: ((currentBoxW) / 2) / 100 , paddingRight: ((currentBoxW) / 2) / 100, paddingTop: ((currentBoxH) / 2) / 100 , paddingBottom: ((currentBoxH) / 2) / 100  }}>
      <Clock
        compDiv={10}
      />
      <CalendarHour
      />
    </main>
  );
}

