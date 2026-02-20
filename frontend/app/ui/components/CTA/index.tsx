import Link from "next/link"

export default function CTA() {
    return (
        <Link href={"/contact-us"} className="bg-gradient-to-r from-red-500 to-red-600 hover:shadow-md hover:scale-5 transition-all text-white font-bold py-2 px-4 sm:py-4 sm:px-6 rounded-full text-lg sm:text-xl m-4 mt-8 text-center">
            <span className="font-normal whitespace-nowrap">Contact Us Now For a</span> <span className="whitespace-nowrap"><span className="underline">Free Quote</span> {"->"}</span>
        </Link>
    )
}