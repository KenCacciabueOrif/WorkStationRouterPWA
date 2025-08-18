import { CalendarHour } from "~/components/CalendarHour";
import type { Route } from "./+types/calendarHourPath";

/**
 * @author Ken Cacciabue
 * @date 13.08.2025
 * @name home
 * @description
 * Home route of the app
 * 
 */

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <CalendarHour/>;
}
