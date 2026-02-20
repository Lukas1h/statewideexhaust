'use client'
import Image from "next/image"
import { Card } from "@/app/ui/components";
import Link from "next/link";

//Array of images and to display
const images = [
    {
        src: "/resturants/taco.svg",
        alt: "Taco Bell Logo"
    },
    {
        src: "/resturants/arbys.svg",
        alt: "Arby's Logo"
    },
    {
        src: "/resturants/cjs.svg",
        alt: "Carl's Junior Logo"
    },
    {
        src: "/resturants/bk.svg",
        alt: "Burger King Logo"
    },
    {
        src: "/resturants/mcds.svg",
        alt: "McDonald's Logo"
    },
    {
        src: "/resturants/dq.svg",
        alt: "Dairy Queen Logo"
    },
]

export default function TrustedBy() {
    const duplicatedImages = [...images, ...images];

    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-2 max-w-[500px]">
                Trusted by both <span className="whitespace-nowrap "><em className="font-black text-5xl underline">local</em> and{" "}
                    <em className="font-black text-5xl underline">renowned</em></span> businesses.
            </h2>
            <p className="max-w-[600px] mx-4 mb-8 text-xl text-center">
                Oregon&apos;s restaurants rely on <span className="font-bold">Statewide Exhaust Services</span> for thorough, NFPA-certified hood cleaning. From fast food chains to local eateries, our family-owned team ensures every kitchen meets safety standards while keeping your hood sparkling clean. Serving <span className="font-bold">Eugene</span>, <span className="font-bold">Springfield</span>, and <span className="font-bold">Roseburg</span>.
                <br />
                <Link href={"/contact-us"} className="text-red-600 underline font-extrabold py-2 px-4 sm:py-4 sm:px-6 rounded-full text-2xl text-center block">
                    Join Us Today {"->"}
                </Link>
            </p >

            <Card className="max-w-none w-screen m-0 p-0 mb-24 rounded-none overflow-hidden">
                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max animate-scroll">
                        {duplicatedImages.map((image, index) => (
                            <div
                                className="flex items-center justify-center px-12"
                                key={`${image.src}-${index}`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={200}
                                    height={200}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Card>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 25s linear infinite;
                }
            `}</style>
        </>
    );
}
