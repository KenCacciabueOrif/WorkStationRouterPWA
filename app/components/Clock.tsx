import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Temporal } from "temporal-polyfill";
// library pour les formats dates

/**
 * @author Ken Cacciabue
 * @date 14.08.2025
 * @name Clock
 * @description
 * Show Time
 * 
 */
export function Clock({key, nbBrotherComp = 1}:{key?: number,nbBrotherComp?: number}) {
  const [currentTime, setCurrentTime] = useState(Temporal.Now.plainDateTimeISO())

  const [currentBoxH, setCurrentBoxH] = useState(0)
  const [currentBoxW, setCurrentBoxW] = useState(0)

  const [parentBoxH, setParentBoxH] = useState(0)
  const [parentBoxW, setParentBoxW] = useState(0)

  useEffect(() => {

    setInterval(() => {
      const clock = document.getElementById('clock')

      if (clock) {
        setCurrentBoxH(clock.offsetHeight)
        setCurrentBoxW(clock.offsetWidth)

        const clockParent = clock.parentElement
        if (clockParent) {
          setParentBoxH(clockParent.offsetHeight)
          setParentBoxW(clockParent.offsetWidth)
        }
      }

      setCurrentTime(Temporal.Now.plainDateTimeISO())
    }, 1)
  }, [])

  return (
    <main key={key} className={`flex items-center justify-center h-full w-full `} id='clock' style={{height: parentBoxH/nbBrotherComp, fontSize: ((parentBoxW+parentBoxH)/2/10)/nbBrotherComp, paddingLeft: ((parentBoxW)/2)/10/nbBrotherComp, paddingRight: ((parentBoxW)/2)/10/nbBrotherComp, paddingTop: ((parentBoxH)/2)/10/nbBrotherComp, paddingBottom: ((parentBoxH)/2)/10/nbBrotherComp}}>
      <NavLink to="/clock" className="flex flex-col items-center justify-center h-full w-full">
          <div className={`flex w-full`}>
            {currentTime.year}:{currentTime.month}:{currentTime.day} {currentTime.hour}:{currentTime.minute}:{currentTime.second}
          </div>
        </NavLink>
    </main>
  );
}



