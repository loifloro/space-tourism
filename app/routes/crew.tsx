import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import axios from "axios";
import PageHeading from "~/components/PageHeading";

export default function Crew() {
    const [currentCrew, setCurrentCrew] = useState<Crew>();
    const [crews, setCrews] = useState<Crew[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (currentIndex < crews.length - 1) {
                setCurrentCrew(crews[currentIndex + 1]);
                setCurrentIndex((prev) => prev + 1);
            }
        },
        onSwipedRight: () => {
            if (currentIndex > 0) {
                setCurrentCrew(crews[currentIndex - 1]);
                setCurrentIndex((prev) => prev - 1);
            }
        },
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);

                const crews = (await axios.get<Data>("data.json")).data["crew"];

                setCrews(crews);

                setCurrentCrew(crews[currentIndex]);

                setIsLoading(false);
            } catch (error: any) {
                // @todo add error handling

                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="p-6 md:p-10 w-screen grid items-center lg:items-end md:max-w-10/12 lg:max-w-11/12 mx-auto">
            <PageHeading
                title="Meet your crew"
                number="02"
                classname="flex justify-center md:justify-start gap-6 mb-6 md:text-xl"
            />
            <div
                className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-8 items-center w-full"
                {...handlers}
            >
                <div className="flex lg:flex-1/2 justify-center my-10 h-full">
                    <div className="flex flex-col gap-10 lg:justify-between">
                        <div className="flex flex-col gap-6 text-center lg:text-left lg:h-full lg:justify-center">
                            <div className="uppercase">
                                <div className="font-serif text-lg md:text-xl lg:text-[32px] text-white opacity-50">
                                    {currentCrew?.role}
                                </div>
                                <div className="font-serif text-white text-2xl md:text-[40px] lg:text-[56px]">
                                    {currentCrew?.name}
                                </div>
                            </div>
                            <div className="text-blue-300 text-[15px] lg:text-lg leading-7">
                                {currentCrew?.bio}
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-start gap-4 lg:gap-10 lg:mb-12">
                            {crews.map((crew, index) => (
                                <div
                                    className={`rounded-full w-2.5 h-2.5 lg:w-4 lg:h-4 cursor-pointer ${currentIndex === index ? "bg-white" : "bg-[#979797]"}`}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        setCurrentCrew(crews[index]);
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center lg:flex-1/2">
                    <div className="relative">
                        <img
                            src={`./assets/crew/image-${currentCrew?.name.toLowerCase().replace(" ", "-")}.webp`}
                            className="lg:object-contain"
                        />
                        <div className="w-full h-full -translate-y-[99%] -mb-2 absolute bg-linear-[to_bottom,#0C0E1600_77%,#0C0E16_100%] "></div>
                    </div>
                </div>
            </div>
        </main>
    );
}
