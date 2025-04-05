import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";
import { SkeletonTheme } from "react-loading-skeleton";
import { useState } from "react";
import SideMenuProvider from "./providers/SideMenuProvider";
import type { Route } from "./+types/root";

import "./app.css";
import "react-loading-skeleton/dist/skeleton.css";

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
    const [isOpened, setIsOpened] = useState(false);

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
            <SkeletonTheme baseColor="#1B2234" highlightColor="#10141F">
                <SideMenuProvider value={{ isOpened, setIsOpened }}>
                    <body
                        className={`${isOpened ? "overflow-hidden" : "overflow-auto"}`}
                    >
                        {children}
                        <ScrollRestoration />
                        <Scripts />
                    </body>
                </SideMenuProvider>
            </SkeletonTheme>
        </html>
    );
}

export default function App() {
    return <Outlet />;
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
