import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const [isShown, setIsShown] = useState(false);

    return (
        <header className="flex items-center justify-between p-6">
            <img src="./assets/header/logo.svg" className="h-10 w-10" />
            <img
                src="./assets/header/icon-hamburger.svg"
                className="w-6 h-5 cursor-pointer"
                onClick={() => setIsShown(true)}
            />
            <MobileMenu isShown={isShown} setIsShown={setIsShown} />
        </header>
    );
}
