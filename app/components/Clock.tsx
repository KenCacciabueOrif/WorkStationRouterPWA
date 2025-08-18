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
export function Clock({key, compDiv = 1}:{key?: number,compDiv?: number}) {
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

  let smallestBoxD 

  let dividBox

  if(currentBoxH <= (currentBoxW / 5)){
    smallestBoxD = currentBoxH
    dividBox = 2
  } else {
    smallestBoxD = currentBoxW 
    dividBox = 10

  }



  return (
    <main key={key} className={`flex items-center justify-center h-full w-full `} id='clock' style={{height: parentBoxH/compDiv, fontSize: (smallestBoxD / dividBox), paddingLeft: ((currentBoxW)/2)/10, paddingRight: ((currentBoxW)/2)/10, paddingTop: ((currentBoxH)/2)/10, paddingBottom: ((currentBoxH)/2)/15}}>
      <NavLink to="/clock" className="flex flex-col items-center justify-center h-full w-full">
          <div className={`flex w-full h-full items-center`}>
            {currentTime.year}:{currentTime.month}:{currentTime.day} {currentTime.hour}:{currentTime.minute}:{currentTime.second}
          </div>
        </NavLink>
    </main>
  );
}



