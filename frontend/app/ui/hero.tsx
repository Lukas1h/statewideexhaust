import Image from "next/image"




export default function Hero() {
    return (
        <div className="max-w-4xl m-2">
            <div className="h-36"></div>
            <div className="flex flex-col items-center">
                <Image
                    src="/logo-w-text.png"
                    width="2174"
                    height="722"
                    alt="Hero Image"
                    className=""
                />
                <h1 className="text-3xl font-light mt-4 text-center">Where Unparalleled Quality Meets Spectacular Service</h1>
            </div>
            <div className="bg-gradient-to-l from-red-100 to-gray-200 rounded-2xl mt-10 flex items-center flex-col p-8">
                <h2 className="text-3xl font-extrabold text-[#534545]">Trusted by both local and renowned businesses.</h2>
                <div className="w-[100%] flex bg-red-500 justify-between">
                    <Image
                        src="/resturants/cjs.png"
                        height={250}
                        width={284}
                        alt="Carl's Junior Logo"
                    />
                    <Image
                        src="/resturants/taco.png"
                        height={250}
                        width={284}
                        alt="Carl's Junior Logo"
                        className="h-[100%] w-[100%]"
                    />
                    <Image
                        src="/resturants/winco.png"
                        height={250}
                        width={600}
                        alt="Carl's Junior Logo"
                        className="h-[100%] w-[100%]"
                    />
                    {/* <Image
                        src="/resturants/taco.png"
                        height={500}
                        width={401}
                        alt="Taco Bell Logo"
                        className="flex-shrink"
                    />
                    <Image
                        src="/resturants/winco.png"
                        width={1316}
                        height={500}
                        alt="Carl's Junior Logo"
                        className="flex-shrink"
                    /> */}
                </div>
            </div>

        </div>
    )
}