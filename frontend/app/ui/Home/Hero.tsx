import Image from "next/image"


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
            </div>
        </>
    )
}