import Image from "next/image"

const images = [
    {
        src:"/resturants/taco.svg",
    },
    {
        src:"/resturants/arbys.svg",
    },
    {
        src:"/resturants/cjs.svg",
    },
    {
        src:"/resturants/bk.svg",
    },
    {
        src:"/resturants/mcds.svg",
    },
    {
        src:"/resturants/dq.svg",
    },
]


export default function Home() {
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
                <h1 className="text-2xl md:text-3xl font-light mt-4 text-center">Where Unparalleled Quality Meets Spectacular Service</h1>
            </div>
            <div className="bg-gradient-to-l from-red-100 to-gray-200 rounded-2xl mt-10 flex items-center flex-col py-6 p-2 md:p-8">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#534545] text-center">Trusted by both local and renowned businesses.</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 m-2 ">
                    {images.map((image)=>{
                        return (
                            <div className="flex items-center ">
                                <Image
                                    src={image.src}
                                    alt={""}
                                    width={500}
                                    height={500}
                                />
                            </div>
                        )
                    })}
                    
                    
                </div>
            </div>

        </div>
    )
}