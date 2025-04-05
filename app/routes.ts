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
    layout("layout/crew-layout.tsx", [route("crew", "routes/crew.tsx")]),
    layout("layout/technology-layout.tsx", [
        route("technology", "routes/technology.tsx"),
    ]),
] satisfies RouteConfig;
