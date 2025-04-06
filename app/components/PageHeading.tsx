import React from "react";

type PageHeading = {
    title: string;
    number: string;
    classname?: string;
};

export default function PageHeading({ title, number, classname }: PageHeading) {
    return (
        <div
            className={`flex justify-center md:justify-start gap-6 lg:text-[28px] ${classname}`}
        >
            <span className="font-bold font-sans-condensed opacity-25 text-white tracking-widest">
                {number}
            </span>
            <h1 className="uppercase tracking-widest font-sans-condensed text-white">
                {title}
            </h1>
        </div>
    );
}
