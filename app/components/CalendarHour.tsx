import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router"
import { Temporal } from "temporal-polyfill"

/**
 * @author Ken Cacciabue
 * @date 14.08.2025
 * @name CalendarHour
 * @description
 * Calendrier pour une heure
 * 
 */
export function CalendarHour({ key, compDiv = 1 }: { key?: number, compDiv?: number }) {
  const [currentTime, setCurrentTime] = useState(Temporal.Now.plainDateTimeISO())

  const [currentBoxH, setCurrentBoxH] = useState(0)
  const [currentBoxW, setCurrentBoxW] = useState(0)

  const [parentBoxH, setParentBoxH] = useState(0)
  const [parentBoxW, setParentBoxW] = useState(0)

  useEffect(() => {


    setInterval(() => {
      const calendarH = document.getElementById('CalendarHour')
      setCurrentTime(Temporal.Now.plainDateTimeISO())

      if (calendarH) {
        setCurrentBoxH(calendarH.offsetHeight)
        setCurrentBoxW(calendarH.offsetWidth)

        const calendarHParent = calendarH.parentElement
        if (calendarHParent) {
          setParentBoxH(calendarHParent.offsetHeight)
          setParentBoxW(calendarHParent.offsetWidth)
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

  let minuteList = []
  for (let i = 0; i < 60; i++) {
    minuteList.push(i)
  }

  function thisMinuteStyle(minute: number, currentMinute: number) {
    let style = ''
    if (minute === currentMinute) {
      style = 'bg-pink-950'
    }
    return style
  }

  let smallestBoxD
  if (currentBoxH <= currentBoxW) {
    smallestBoxD = currentBoxH
  } else {
    smallestBoxD = currentBoxW
  }

  let mapList = (
    <>
      {
        minuteList.map((minute, key) => (
          <div id={`min ${minute}`} key={key} className={`flex grow border-gray-700 ${thisMinuteStyle(minute, currentTime.minute)}`} style={{ fontSize: (smallestBoxD / minuteList.length) / 3, borderWidth: ((currentBoxH + currentBoxW) / 2 / 1000) }}>{minute}</div>
        ))
      }
    </>
  )

  if(currentBoxH < 300){
    mapList = <div className="bg-gray-900 flex grow"></div>
  }

  return (
    <main id="CalendarHour" key={key} className={`flex flex-col items-left w-full justify-left`} style={{ height: parentBoxH / compDiv, paddingLeft: ((currentBoxW) / 2) / 100, paddingRight: ((currentBoxW) / 2) / 100, paddingTop: ((currentBoxH) / 2) / 100, paddingBottom: ((currentBoxH) / 2) / 100 }} >
      <p style={{ fontSize: (smallestBoxD / minuteList.length) }}>Heure</p>
      <NavLink to="/calendarHour" className="flex flex-col h-full" >
        {mapList}
      </NavLink>
    </main>
  );
}

