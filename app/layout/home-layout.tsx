import { Outlet } from "react-router";
import Header from "~/components/Header";

export default function HomeLayout() {
    return (
        <div
            className={`bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover bg-no-repeat bg-center bg-fixed min-h-screen`}
        >
            <Header />
            <Outlet />
        </div>
    );
}
