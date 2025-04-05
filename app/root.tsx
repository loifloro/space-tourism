import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";

import "./app.css";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import type { Route } from "./+types/root";

export const links: Route.LinksFunction = () => [
    {
        rel: "icon",
        href: "./favicon.png",
        type: "image/png",
    },
    {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
    },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@400;700&family=Bellefair&display=swap",
    },
];

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Space Tourism" },
        {
            name: "description",
            content: `So, you want to travel to Space. Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.`,
        },
        {
            name: "author",
            content: "Lois Floro",
        },
    ];
}

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return (
        <SkeletonTheme baseColor="#1B2234" highlightColor="#10141F">
            <Outlet />
        </SkeletonTheme>
    );
}

export function HydrateFallback() {
    return <>Loading...</>;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}
