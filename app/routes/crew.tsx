import axios from "axios";
import { useEffect, useState } from "react";
import PageHeading from "~/components/PageHeading";

export default function Crew() {
    const [currentCrew, setCurrentCrew] = useState<Crew>();
    const [crews, setCrews] = useState<Crew[]>([]);
    const [selectedCrew, setSelectedCrew] = useState("Douglas Hurley");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);

                const crews = (await axios.get<Data>("data.json")).data["crew"];

                setCrews(crews);

                setCurrentCrew(
                    crews.find((crew) => crew.name === selectedCrew)
                );

                setIsLoading(false);
            } catch (error: any) {
                // @todo add error handling

                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="p-6 md:p-10 w-screen grid items-center lg:items-end md:max-w-11/12 mx-auto">
            <PageHeading
                title="Meet your crew"
                number="02"
                classname="flex justify-center md:justify-start gap-6 mb-6 md:text-xl"
            />
            <div className="w-full">
                <div className="flex justify-center my-10">
                    <div className="flex flex-col gap-6 text-center">
                        <div className="uppercase">
                            <div className="font-serif text-lg text-white opacity-50">
                                {currentCrew?.role}
                            </div>
                            <div className="font-serif text-white text-2xl">
                                {currentCrew?.name}
                            </div>
                        </div>
                        <div className="text-blue-300 text-[15px] lg:text-lg leading-7">
                            {currentCrew?.bio}
                        </div>
                    </div>
                </div>
                {/* @todo add carousel controls */}
                <div>
                    <img
                        src={`./assets/crew/image-${currentCrew?.name.toLowerCase().replace(" ", "-")}.webp`}
                    />
                </div>
            </div>
        </main>
    );
}
