import axios from "axios";
import { useEffect, useState } from "react";
// import data from "~/data.json";

export default function Destination() {
    const [currentDestination, setCurrentDestination] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("./app/data.json");
                const data = response.data.destinations;
                setCurrentDestination(data[0]); // Set the first destination as default
            } catch (error: any) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    console.log(currentDestination);

    return (
        <main className="py-4 sm:py-10 min-h-[80vh] w-screen grid place-content-center items-center lg:items-end">
            <div className="flex gap-6">
                <span className="font-bold font-sans-condensed opacity-25 text-white tracking-widest">
                    01
                </span>
                <h1 className="uppercase tracking-widest font-sans-condensed text-white">
                    Pick your destination
                </h1>
            </div>
            <div className="flex items-center">
                {/* <img
                    src={`./assets/destination/image-${currentDestination.name.toLowerCase()}.webp`}
                    alt={currentDestination.description}
                    className="w-[150px] h-[150px]"
                /> */}
            </div>
        </main>
    );
}
