import { useEffect, useState } from "react"

/**
 * @author Ken Cacciabue
 * @date 14.08.2025
 * @name CalendarHour
 * @description
 * Calendrier pour une heure
 * 
 */
export function CalendarHour({key, nbBrotherComp=1}:{key?: number, nbBrotherComp?: number}) {
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

      }, 1)
    }, [])
    
  let compStyle = 'h-full w-full'
  if(typeof nbBrotherComp === 'number'){
    
    let h = ' h-1/' + nbBrotherComp.toString()
    let w = ' w-1/' + nbBrotherComp.toString()
    compStyle = h + w
  }
  return (
    <main key={key} className={`flex items-center justify-center`} style={{height: parentBoxH/nbBrotherComp, fontSize: ((parentBoxW+parentBoxH)/2/10)/nbBrotherComp, paddingLeft: ((parentBoxW)/2)/10/nbBrotherComp, paddingRight: ((parentBoxW)/2)/10/nbBrotherComp, paddingTop: ((parentBoxH)/2)/10/nbBrotherComp, paddingBottom: ((parentBoxH)/2)/10/nbBrotherComp}} >
      <div className="flex-1 flex flex-col items-center">
        <p>Heure</p>
      </div>
    </main>
  );
}

