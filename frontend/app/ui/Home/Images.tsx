import { Card } from "../components"

import Image from "next/image"

const hoodImageBaseURL = "/hoods/"
const cleanImages = [
    "clean.webp",
    "clean4.webp",
].map((img)=>{
    return hoodImageBaseURL + img
})

const dirtyImages = [
    "dirty1.webp",
    "dirty2.webp",
].map((img)=>{
    return hoodImageBaseURL + img
})


export default function Images(){
    return (
        <Card>
            <h2 className="text-2xl md:text-3xl font-bold text-grey-500 text-center ">Transform your <em className="font-black">nasty</em> kitchen hood from this:</h2>
            <div className="w-full flex flex-wrap items-center justify-center mb-6">
                {
                    dirtyImages.map((image)=>{
                        return (
                            <Image
                                className="m-2 rounded-lg"
                                src={image}
                                key={image}
                                alt="Photo of a dirty resturant hood."
                                width={350}
                                height={350}

                            />
                        )
                    })
                }
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-grey-500 text-center">Into this:</h2>
            <div className="w-full flex flex-wrap items-center justify-center">
                {
                    cleanImages.map((image)=>{
                        return (
                            <Image
                            className="m-2 rounded-lg"
                                src={image}
                                key={image}
                                alt="Photo of a clean resturant hood."
                                width={350}
                                height={350}

                            />
                        )
                    })
                }
            </div>
        </Card>
    )
}



