import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

export default function Destination() {
    const [currentDestination, setCurrentDestination] = useState<Destination>();
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [selectedDestination, setSelectedDestination] = useState("Moon");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);

                const destinations = (await axios.get<Data>("./app/data.json"))
                    .data["destinations"];

                setDestinations(destinations);

                setCurrentDestination(
                    destinations.find(
                        (dest) => dest.name === selectedDestination
                    )
                );

                setIsLoading(false);
            } catch (error: any) {
                // @todo add error handling

                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    console.log(selectedDestination, currentDestination);

    return (
        <main className="p-6 md:p-10 w-screen grid items-center lg:items-end md:max-w-11/12 mx-auto">
            <div className="flex justify-center md:justify-start gap-6 mb-6 md:text-xl">
                <span className="font-bold font-sans-condensed opacity-25 text-white tracking-widest">
                    01
                </span>
                <h1 className="uppercase tracking-widest font-sans-condensed text-white">
                    Pick your destination
                </h1>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mx-auto md:max-w-4/5 lg:max-w-full lg:my-20">
                <div className="flex flex-1 items-center justify-center my-7 md:my-12 lg:my-4">
                    {!isLoading ? (
                        <img
                            src={`./assets/destination/image-${currentDestination?.name.toLowerCase()}.webp`}
                            alt={currentDestination?.description}
                            className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:h-[480px] lg:w-[480px] drop-shadow-lg object-contain"
                        />
                    ) : (
                        <Skeleton width={150} height={150} circle />
                    )}
                </div>
                <div className="flex flex-col items-center lg:items-start justify-center gap-6 lg:gap-10 flex-1 lg:max-w-11/12 mx-auto">
                    <div className="flex gap-8 items-start">
                        {destinations.map((dest) => (
                            <button
                                key={dest.name}
                                className="flex flex-col items-center justify-center gap-3 cursor-pointer"
                                type="button"
                            >
                                <div
                                    className={`text-sm md:text-[1rem] uppercase font-sans-condensed tracking-widest ${dest.name === selectedDestination ? "text-white" : "text-blue-300"}`}
                                    onClick={() => {
                                        setSelectedDestination(dest.name);
                                        setCurrentDestination(
                                            destinations.find(
                                                (item) =>
                                                    item.name === dest.name
                                            )
                                        );
                                    }}
                                >
                                    {dest.name}
                                </div>
                                {dest.name === selectedDestination && (
                                    <hr className="border-white border-2 h-1 block w-full" />
                                )}
                            </button>
                        ))}
                    </div>
                    <div className="text-center lg:text-left">
                        <h3 className="uppercase text-[56px] md:text-[80px] tracking-wider leading-20 md:leading-[91px] font-serif text-white font-normal">
                            {currentDestination?.name}
                        </h3>
                        <p className="text-[15px] lg:text-lg leading-8 text-blue-300">
                            {currentDestination?.description}
                        </p>
                    </div>
                    <hr className="border-[#979797] border-[0.5px] block w-full" />
                    <div className="flex flex-col md:flex-row md:justify-around lg:justify-start gap-6 text-center lg:text-left uppercase w-full">
                        <div className="flex flex-1/2 flex-col gap-3">
                            <div className="text-blue-300 text-sm font-sans-condensed tracking-widest">
                                Avg. Distance
                            </div>
                            <div className="text-3xl text-white font-serif">
                                {currentDestination?.distance}
                            </div>
                        </div>
                        <div className="flex flex-1/2 flex-col gap-3">
                            <div className="text-blue-300 text-sm font-sans-condensed tracking-widest">
                                Est. Travel Time
                            </div>
                            <div className="text-3xl text-white font-serif">
                                {currentDestination?.travel}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
