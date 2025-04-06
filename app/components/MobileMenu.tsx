import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router";
import { navItems } from "~/lib/constants";
import { SideMenuContext } from "~/providers/SideMenuProvider";
import { useContext } from "react";

export default function MobileMenu() {
    const currentPathname = useLocation().pathname;
    const { isOpened, setIsOpened } = useContext(SideMenuContext);

    return createPortal(
        <nav
            className={`min-w-[80vw] min-h-screen absolute right-0 backdrop-blur-3xl pl-8 z-999 ${isOpened ? "block" : "hidden"}`}
            style={{ top: `${window.pageYOffset}px` }}
        >
            <div className="flex justify-end py-8 mr-8 mb-8">
                <img
                    src="./assets/header/icon-close.svg"
                    className="w-fit h-fit cursor-pointer"
                    onClick={() => setIsOpened(false)}
                />
            </div>
            <div>
                <ul className="flex flex-col gap-8 mt-8">
                    {navItems.map((item) => (
                        <li key={item.key}>
                            <Link
                                to={item.link}
                                className="flex justify-between items-center"
                                onClick={() => setIsOpened(false)}
                            >
                                <div className="flex gap-3 uppercase text-white font-sans-condensed tracking-wide">
                                    <p className="font-bold">{item.key}</p>
                                    <p>{item.name}</p>
                                </div>
                                {currentPathname === item.link && (
                                    <hr className="border-white border-2 h-8" />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>,
        document.body
    );
}
