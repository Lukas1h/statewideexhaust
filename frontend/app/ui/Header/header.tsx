'use client';
import Link from "next/link";
import { usePathname } from "next/navigation"

const links = [
    {
        href:"/blog",
        title:"Blog"
    },
    {
        href:"/about",
        title:"About"
    }
    ,
    {
        href:"/contact-us",
        title:"Contact Us"
    }
]

export default function Header(){
    const pathname = usePathname()

    return (
        <header className="h-52 w-full sticky top-0 bg-red-600">
            <h1>Yay my header lol</h1>
            <h1>We are at {pathname}</h1>
            {
                links.map((link)=>{
                    return (
                        <Link href={link.href}>{link.title}</Link>
                    )
                })
            }
        </header>
    )
}