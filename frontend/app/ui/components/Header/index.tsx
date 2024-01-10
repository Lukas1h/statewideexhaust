'use client';
import Link from "next/link";
import { usePathname } from "next/navigation"
import Image from "next/image";
import "./styles.css"


const links = [
    {
        href:"/contact-us",
        title:"Contact Us"
    }
]

//Blog is disabled in production rn
if(process.env.VERCEL_ENV != "production"){
    links.unshift({
        href:"/blog",
        title:"Blog"
    })
}

export default function Header(){
    const pathname = usePathname()

    console.log(pathname)

    return (
        <header className=" header" >
            <div className="max-w-[60rem] flex items-center justify-between w-full header-inner">
                <Link
                    href={"/"}
                    className="font-bold text-2xl text-grey-500 flex space-x-2"
                >
                    <img
                        src={"/logo-w-text.png"}
                        height={200}
                        className="max-h-11"
                        alt="Image of company logo"
                    />
                </Link>
                <div className="flex shrink-0">
                    {
                        links.map((link)=>{
                            return (
                                <Link 
                                    key={link.href}
                                    className={`transition-all ${pathname.startsWith(link.href) ? "bg-gradient-to-r from-red-800 to-red-800" : "bg-gradient-to-r from-red-500 to-red-600"}  text-white font-bold py-2 px-4 rounded-full mx-2 md:mx-4 text-xs md:text-sm`}
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
