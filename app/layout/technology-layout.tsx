import { Outlet } from "react-router";
import Header from "~/components/Header";

export default function TechnologyLayout() {
    return (
        <div
            className={`bg-[url('/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] bg-cover bg-no-repeat bg-center min-h-screen`}
        >
            <Header />
            <Outlet />
        </div>
    );
}
