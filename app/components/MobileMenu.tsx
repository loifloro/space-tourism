import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router";

export default function MobileMenu({
    isShown,
    setIsShown,
}: {
    isShown: boolean;
    setIsShown: (isShown: boolean) => void;
}) {
    const currentPathname = useLocation().pathname;

    const navItems = [
        {
            name: "Home",
            link: "/",
            key: "00",
        },
        {
            name: "Destination",
            link: "/destination",
            key: "01",
        },
        {
            name: "Crew",
            link: "/crew",
            key: "02",
        },
        {
            name: "Technology",
            link: "/technology",
            key: "03",
        },
    ];

    return createPortal(
        <nav
            className={`min-w-[80vw] min-h-screen absolute top-0 right-0 backdrop-blur-3xl pl-8 z-999 ${isShown ? "block" : "hidden"}`}
        >
            <div className="flex justify-end py-8 mr-8 mb-8">
                <img
                    src="./assets/header/icon-close.svg"
                    className="w-fit h-fit cursor-pointer"
                    onClick={() => setIsShown(false)}
                />
            </div>
            <div>
                <ul className="flex flex-col gap-8 mt-8">
                    {navItems.map((item) => (
                        <li>
                            <Link
                                to={item.link}
                                className="flex justify-between items-center"
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
