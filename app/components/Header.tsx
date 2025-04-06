import { navItems } from "~/lib/constants";
import { SideMenuContext } from "~/providers/SideMenuProvider";
import { useContext } from "react";
import MobileMenu from "./MobileMenu";
import { Link, useLocation } from "react-router";

function Menu() {
    const currentPathname = useLocation().pathname;

    return (
        <nav className="hidden md:flex items-end justify-end h-full bg-[#FFFFFF0E] backdrop-blur-3xl px-10 lg:px-16 flex-1/3 lg:flex-1/2">
            <ul className="flex gap-12 justify-end uppercase text-white font-sans-condensed tracking-wide">
                {navItems.map((item) => (
                    <li className="flex flex-col gap-8">
                        <Link to={item.link} className="flex gap-3">
                            <p
                                className={`font-bold ${item.link === "/" && currentPathname === "/" ? "hidden" : "block"}`}
                            >
                                {item.key}
                            </p>
                            <p>{item.name}</p>
                        </Link>
                        {currentPathname === item.link && (
                            <hr className="border-white border-1 block w-full" />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default function Header() {
    const { setIsOpened } = useContext(SideMenuContext);

    return (
        <header className="w-full flex items-center justify-between p-6 md:p-0 md:h-24">
            <div className="flex items-center justify-center lg:justify-start md:px-10 lg:px-16 lg:flex-1/2">
                <img
                    src="./assets/header/logo.svg"
                    className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
                />
            </div>
            <hr className="absolute z-10 max-w-[40vw] translate-1/4 ml-10 hidden lg:block border-[#979797] border-[0.5px] w-full" />
            <img
                src="./assets/header/icon-hamburger.svg"
                className="w-6 h-5 cursor-pointer block md:hidden"
                onClick={() => setIsOpened(true)}
            />
            <Menu />
            <MobileMenu />
        </header>
    );
}
