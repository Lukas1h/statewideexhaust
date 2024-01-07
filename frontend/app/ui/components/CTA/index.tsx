import Link from "next/link"

export default function CTA(){
    return (
        <Link href={"/contact-us"} className="bg-gradient-to-r from-red-500 to-red-600 hover:shadow-md transition-all text-white font-bold py-4 px-6 rounded-full text-lg md:text-xl m-4">
            Contact Us
        </Link>
    )
}