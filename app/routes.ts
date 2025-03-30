import {
    type RouteConfig,
    index,
    layout,
    route,
} from "@react-router/dev/routes";

export default [
    layout("layout/home-layout.tsx", [index("routes/home.tsx")]),
    layout("layout/destination-layout.tsx", [
        route("destination", "routes/destination.tsx"),
    ]),
] satisfies RouteConfig;
