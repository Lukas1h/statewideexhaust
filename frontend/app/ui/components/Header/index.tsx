'use client';
import Link from "next/link";
import { usePathname } from "next/navigation"
import Image from "next/image";
import "./styles.css"


const links = [
    {
        href: "/contact-us",
        title: "Contact Us"
    },
    {
        href: "/contact-us",
        title: "Contact Us"
    },
    {
        href: "/contact-us",
        title: "Free Quote"
    }
]


export default function Header() {
    const pathname = usePathname()

    console.log(pathname)

    return (
        <header className=" header" >
            <div className="max-w-[60rem] flex items-center justify-center sm:justify-between w-full header-inner ">
                <Link
                    href={"/"}
                    className="font-bold text-2xl text-grey-500 space-x-2 hidden sm:flex"
                >
                    <img
                        src={"/logo-w-text.webp"}
                        height={200}
                        className="max-h-11"
                        alt="Image of company logo"
                    />
                </Link>
                <div className="flex shrink-0">
                    <Link

                        className={`transition-all text-gray-900 font-bold py-2 px-4 rounded-full text-md md:text-lg  `}
                        href={"#services"}
                    >
                        {"Services"}
                    </Link>
                    <Link

                        className={`transition-all text-gray-900 font-bold py-2 px-4 rounded-full text-md md:text-lg `}
                        href={"contact-us"}
                    >
                        {"Contact Us"}
                    </Link>
                    <Link

                        className={`hover:scale-105 transition-all bg-gradient-to-r from-red-500 to-red-600  text-white font-bold py-2 px-4 rounded-full text-sm md:text-md items-center justify-center flex`}
                        href={"contact-us"}
                    >
                        {"Free Quote ->"}
                    </Link>
                </div>
            </div>
        </header>
    )
}
