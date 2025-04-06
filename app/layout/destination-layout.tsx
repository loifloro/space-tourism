import { Outlet } from "react-router";
import Header from "~/components/Header";

export default function DestinationLayout() {
    return (
        <div
            className={`bg-[url('/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-cover bg-no-repeat bg-center min-h-screen lg:pt-10`}
        >
            <Header />
            <Outlet />
        </div>
    );
}
