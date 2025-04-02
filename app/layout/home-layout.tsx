import { Outlet } from "react-router";
import Header from "~/components/Header";

export default function HomeLayout() {
    return (
        <div
            className={`bg-[url('/assets/home/background-home-mobile.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')] bg-cover bg-no-repeat bg-center min-h-screen`}
        >
            <Header />
            <Outlet />
        </div>
    );
}
