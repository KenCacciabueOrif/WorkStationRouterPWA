import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("clock", "routes/clockPath.tsx"),
    route("calendarHour", "routes/calendarHourPath.tsx")
] satisfies RouteConfig;
