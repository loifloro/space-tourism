import { createContext, type Dispatch, type SetStateAction } from "react";

export const SideMenuContext = createContext<{
    isOpened: boolean;
    setIsOpened: Dispatch<SetStateAction<boolean>>;
}>({
    isOpened: false,
    setIsOpened: () => {},
});

export default function SideMenuProvider({
    children,
    value,
}: {
    children: React.ReactNode;
    value: {
        isOpened: boolean;
        setIsOpened: Dispatch<SetStateAction<boolean>>;
    };
}) {
    return (
        <SideMenuContext.Provider value={value}>
            {children}
        </SideMenuContext.Provider>
    );
}
