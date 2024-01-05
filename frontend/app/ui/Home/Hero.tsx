import Image from "next/image"
import Link from "next/link"


//Main Hero component that displays hero image and tagline
export default function Hero() {
    return (
        <>
            <div className="flex flex-col items-center my-8">
                <Image
                    src="/logo-w-text.png"
                    width="2174"
                    height="722"
                    alt="Hero Image"
                    className=""
                />
                <h1 className="text-2xl md:text-3xl font-light mt-4 text-center">Where Unparalleled Quality Meets Spectacular Service</h1>

                <Link href={"/contact-us"} className="bg-gradient-to-r from-red-500 to-red-600 hover:shadow-md transition-all text-white font-bold py-4 px-6 rounded-full text-lg md:text-xl m-4">
                    Contact Us
                </Link>
            </div>
        </>
    )
}