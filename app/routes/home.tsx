import { NavLink } from "react-router";

export default function Home() {
    return (
        <main>
            <div className="p-6 flex flex-col gap-6">
                <h1 className="text-md text-blue-300 tracking-widest font-sans-condensed font-bold text-center uppercase">
                    So, you want to travel to&nbsp;
                </h1>
                <span className="text-center uppercase text-[80px] block leading-20 font-serif text-white font-normal">
                    Space
                </span>
                <p className="text-[15px] leading-8 text-blue-300 text-center">
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </p>
            </div>
            <div className="flex items-center justify-center mt-16 drop-shadow-xl">
                <NavLink
                    to="/destination"
                    className="bg-white h-[150px] w-[150px] rounded-full font-serif text-lg text-blue-900 flex items-center justify-center font-normal tracking-widest uppercase hover:bg-blue-900 hover:text-white transition duration-300"
                >
                    Explore
                </NavLink>
            </div>
        </main>
    );
}
