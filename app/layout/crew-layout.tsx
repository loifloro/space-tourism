import { Outlet } from "react-router";
import Header from "~/components/Header";

export default function CrewLayout() {
    return (
        <div
            className={`bg-[url('/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] bg-cover bg-no-repeat bg-center min-h-screen lg:pt-10`}
        >
            <Header />
            <Outlet />
        </div>
    );
}
