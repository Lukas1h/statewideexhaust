import Image from "next/image"
import Link from "next/link"
import { CTA } from "@/app/ui/components";

//Main Hero component that displays hero image and tagline
export default function Hero() {
    return (
        <>
            <div className="flex flex-col items-center my-8 mx-4 max-w-4xl">
                <Image
                    src="/logo-w-text.webp"
                    width="2174"
                    height="722"
                    alt="Hero Image"
                    className=""
                    priority
                />
                <h1 className="text-2xl md:text-3xl font-light mt-4 text-center"><span className=" font-bold">{"#1"} Trusted Hood Cleaners</span><br />
                    In the <span className="font-bold">Eugene</span> / <span className="font-bold">Springfield</span> / <span className="font-bold">Roseburg</span> Area
                </h1>
                <CTA></CTA>
            </div >
        </>
    )
}