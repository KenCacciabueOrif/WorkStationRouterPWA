import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Temporal } from "temporal-polyfill";
// library pour les formats dates

/**
 * @author Ken Cacciabue
 * @date 13.08.2025
 * @name Clock
 * @description
 * Show Time
 * 
 */
export function Clock() {
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

  let textSize = ''

  let clockHTML
  if (parentBoxH <= 10 || parentBoxW <= 100) {
    textSize = 'text-[8px] w-full p-1'
    clockHTML = (
      <div className="flex flex-col items-center justify-center h-full w-full">
        <NavLink to="/clock" className="flex flex-col items-center justify-center h-full w-full">
          <div className={`flex ${textSize}`}>
            {currentTime.year}:{currentTime.month}:{currentTime.day} {currentTime.hour}:{currentTime.minute}:{currentTime.second}
          </div>
        </NavLink>
      </div>)
  } else if (parentBoxH <= 25 || parentBoxW <= 300) {
    textSize = 'text-xl w-full p-1'
    clockHTML = (
      <div className="flex flex-col items-center justify-center h-full w-full">
        <NavLink to="/clock" className="flex flex-col items-center justify-center h-full w-full">
          <div className={`flex ${textSize}`}>
            {currentTime.year}:{currentTime.month}:{currentTime.day} {currentTime.hour}:{currentTime.minute}:{currentTime.second}
          </div>
        </NavLink>
      </div>)
  } else if (parentBoxH <= 50 || parentBoxW <= 500) {
    textSize = 'text-4xl w-full p-1'
    clockHTML = (
      <div className="flex flex-col items-center justify-center h-full w-full">
        <NavLink to="/clock" className="flex flex-col items-center justify-center h-full w-full">
          <div className={`flex ${textSize}`}>
            {currentTime.year}:{currentTime.month}:{currentTime.day} {currentTime.hour}:{currentTime.minute}:{currentTime.second}
          </div>
        </NavLink>
      </div>)
  } else if (parentBoxH <= 75 || parentBoxW <= 700) {
    textSize = 'text-5xl w-full p-1'
    clockHTML = (
      <div className="flex flex-col items-center justify-center h-full w-full">
        <NavLink to="/clock" className="flex flex-col items-center justify-center h-full w-full">
          <div className={`flex ${textSize}`}>
            {currentTime.year}:{currentTime.month}:{currentTime.day} {currentTime.hour}:{currentTime.minute}:{currentTime.second}
          </div>
        </NavLink>
      </div>)
  } else if (parentBoxH <= 100 || parentBoxW <= 900) {
    textSize = 'text-6xl w-full p-2'
    clockHTML = (
      <div className="flex flex-col items-center justify-center h-full w-full">
        <NavLink to="/clock" className="flex flex-col items-center justify-center h-full w-full">
          <div className={`flex ${textSize}`}>
            {currentTime.year}:{currentTime.month}:{currentTime.day} {currentTime.hour}:{currentTime.minute}:{currentTime.second}
          </div>
        </NavLink>
      </div>)
  } else if (parentBoxH <= 150 || parentBoxW <= 1100) {
    textSize = 'text-7xl w-full p-4'
    clockHTML = (
      <div className="flex flex-col items-center justify-center h-full w-full">
        <NavLink to="/clock" className="flex flex-col items-center justify-center h-full w-full">
          <div className={`flex ${textSize}`}>
            {currentTime.year}:{currentTime.month}:{currentTime.day} {currentTime.hour}:{currentTime.minute}:{currentTime.second}
          </div>
        </NavLink>
      </div>)
  } else if (parentBoxH <= 175 || parentBoxW <= 1300) {
    textSize = 'text-8xl w-full p-6'
    clockHTML = (
      <div className="flex flex-col items-center justify-center h-full w-full">
        <NavLink to="/clock" className="flex flex-col items-center justify-center h-full w-full">
          <div className={`flex ${textSize}`}>
            {currentTime.year}:{currentTime.month}:{currentTime.day} {currentTime.hour}:{currentTime.minute}:{currentTime.second}
          </div>
        </NavLink>
      </div>)
  } else if (parentBoxH >= 200 || parentBoxW >= 1200) {
    textSize = 'text-9xl w-full p-8'
    clockHTML = (
      <div className="flex flex-col items-center justify-center h-full w-full">
        <NavLink to="/clock" className="flex flex-col items-center justify-center h-full w-full">
          <div className={`flex ${textSize}`}>
            {currentTime.year}:{currentTime.month}:{currentTime.day} {currentTime.hour}:{currentTime.minute}:{currentTime.second}
          </div>
        </NavLink>
      </div>)

  }

  return (
    <main className={`flex items-center justify-center h-full w-full ${textSize}`} id='clock'>
      {clockHTML}
    </main>
  );
}



