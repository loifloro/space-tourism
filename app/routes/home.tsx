import { NavLink } from "react-router";

export default function Home() {
    return (
        <main className="py-4 sm:py-10 min-h-[80vh] grid place-content-center items-center lg:items-end grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
            <div className="p-6 flex flex-col gap-6 md:max-w-9/12 mx-auto">
                <h1 className="text-md md:text-[28px] text-blue-300 tracking-widest font-sans-condensed text-center lg:text-start uppercase">
                    So, you want to travel to&nbsp;
                </h1>
                <span className="text-center lg:text-start uppercase text-[80px] md:text-[144px] block leading-20 md:leading-[165px] font-serif text-white font-normal">
                    Space
                </span>
                <p className="text-[15px] lg:text-lg leading-8 text-blue-300 text-center lg:text-start">
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </p>
            </div>
            <div className="h-full flex items-center lg:items-end justify-center drop-shadow-xl lg:mb-10">
                <NavLink
                    to="/destination"
                    className="bg-white h-[150px] w-[150px] md:w-[272px] md:h-[272px] rounded-full font-serif text-lg md:text-3xl text-blue-900 flex items-center justify-center font-normal tracking-widest uppercase hover:bg-blue-900 hover:text-white transition duration-300"
                >
                    Explore
                </NavLink>
            </div>
        </main>
    );
}
