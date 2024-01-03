import Image from "next/image"

//Array of images and to display
const images = [
    {
        src:"/resturants/taco.svg",
        alt:"Taco Bell Logo"
    },
    {
        src:"/resturants/arbys.svg",
        alt:"Arby's Logo"
    },
    {
        src:"/resturants/cjs.svg",
        alt:"Carl's Junior Logo"
    },
    {
        src:"/resturants/bk.svg",
        alt:"Burger King Logo"
    },
    {
        src:"/resturants/mcds.svg",
        alt:"McDonald's Logo"
    },
    {
        src:"/resturants/dq.svg",
        alt:"Dairy Queen Logo"
    },
]


export default function TrustedBy(){
    return (
        <div className="bg-gradient-to-l from-red-100 to-gray-200 rounded-2xl mt-10 flex items-center flex-col py-6 p-2 md:p-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-grey-500 text-center">Trusted by both local and renowned businesses.</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 m-2 ">
                {/* Iterate through images and display them */}
                {images.map((image)=>{
                    return (
                        <div className="flex items-center ">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={500}
                                height={500}
                            />
                        </div>
                    )
                })}
                
                
            </div>
        </div>
    )
}
