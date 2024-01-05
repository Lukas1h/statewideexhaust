'use client';
import Link from "next/link";
import { usePathname } from "next/navigation"
import "./styles.css"


const links = [
    {
        href:"/blog",
        title:"Blog"
    },
    {
        href:"/contact-us",
        title:"Contact Us"
    }
]

export default function Header(){
    const pathname = usePathname()

    return (
        <header className=" header" >
            <div className="max-w-[60rem] flex items-center justify-between w-full header-inner">
                <Link
                    href={"/"}
                    className="font-bold text-2xl text-grey-500"
                >
                    Home
                </Link>
                <div className="flex">
                    {
                        links.map((link)=>{
                            return (
                                <Link 
                                    key={link.href}
                                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mx-2 md:mx-4 text-xs md:text-sm"
                                    href={link.href}
                                >
                                    {link.title}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    )
}
