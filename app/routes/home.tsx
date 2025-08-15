import { CalendarHour } from "~/components/CalendarHour";
import type { Route } from "./+types/home";
import { Clock } from "~/components/Clock";
import { useState } from "react";
import React from "react";

/**
 * @author Ken Cacciabue
 * @date 13.08.2025
 * @name home
 * @description
 * Home route of the app
 * 
 */

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [comp, setComp] = useState([<CalendarHour />, <Clock />])
  return (
    <>
      {comp.map((composant, index) => {
        composant
        const proppedComponent = React.cloneElement(composant, {
          key: index,
          nbBrotherComp: comp.length
        })
        return proppedComponent
      })}
    </>);
}
