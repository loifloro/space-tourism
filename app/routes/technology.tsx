import { useState, useEffect } from "react";
import axios from "axios";
import PageHeading from "~/components/PageHeading";
import Skeleton from "react-loading-skeleton";

export default function Technology() {
    const [currentTechnology, setCurrentTechnology] = useState<Technology>();
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [selectedTechnology, setSelectedTechnology] =
        useState("Launch vehicle");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const technology = (await axios.get<Data>("data.json")).data[
                    "technology"
                ];

                setTechnologies(technology);

                setCurrentTechnology(
                    technology.find((crew) => crew.name === selectedTechnology)
                );
            } catch (error: any) {
                // @todo add error handling

                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="py-6 md:py-10 w-screen grid items-center lg:items-end lg:max-w-11/12 ml-auto">
            <PageHeading
                title="Space Launch 101"
                number="03"
                classname="px-6 md:px-10 lg:px-0 md:max-w-11/12"
            />
            <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-10 mt-16 lg:mt-10">
                <picture className="flex-1/2 lg:py-16 lg:max-w-[600px]">
                    <source
                        media="(min-width: 769px)"
                        srcSet={`./assets/technology/image-${currentTechnology?.name.toLowerCase().replace(" ", "-")}-portrait.jpg`}
                    />
                    {currentTechnology ? (
                        <img
                            src={`./assets/technology/image-${currentTechnology?.name.toLowerCase().replace(" ", "-")}-landscape.jpg`}
                            alt={currentTechnology?.description}
                            className="w-full object-cover object-bottom"
                        />
                    ) : (
                        <Skeleton className="h-[150px] md:h-[310px] lg:h-[600px] " />
                    )}
                </picture>
                <div className="flex-1/2 px-6 md:px-10 lg:px-0 mx-auto w-full md:w-9/12 flex flex-col lg:flex-row lg:items-center lg:w-full gap-10 lg:gap-16">
                    <div className="flex lg:flex-col gap-4 justify-center">
                        {technologies.map((technology, index) => (
                            <div
                                key={index}
                                className={`font-serif text-lg md:text-2xl rounded-full border-white border-[1px] w-10 h-10 md:h-14 md:w-14 lg:w-20 lg:h-20 flex items-center justify-center cursor-pointer ${technology.name === selectedTechnology ? "bg-white text-black" : "text-white bg-transparent"}`}
                                onClick={() => {
                                    setSelectedTechnology(technology.name);
                                    setCurrentTechnology(technologies[index]);
                                }}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-6 text-center lg:text-left w-full">
                        <div className="uppercase">
                            <p className="font-serif text-lg md:text-xl lg:text-[32px] text-white opacity-50 mb-4">
                                The Terminology...
                            </p>
                            <p className="font-serif text-white text-2xl md:text-[40px] lg:text-[56px]">
                                {currentTechnology?.name || (
                                    <Skeleton className="h-full" width="80%" />
                                )}
                            </p>
                        </div>
                        <p className="text-[15px] lg:text-lg leading-8 text-blue-300 2xl:max-w-2/3">
                            {currentTechnology?.description || (
                                <Skeleton className="w-full" count={3} />
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
