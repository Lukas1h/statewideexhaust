import { Card } from "../components"

import Image from "next/image"

const hoodImageBaseURL = "/hoods/"
const cleanImages = [
    "clean.webp",
    "clean4.webp",
    "clean1.webp",
].map((img)=>{
    return hoodImageBaseURL + img
})

const dirtyImages = [
    "dirty1.webp",
    "clean2.webp",
    "dirty2.webp"
].map((img)=>{
    return hoodImageBaseURL + img
})


export default function Images(){
    return (
        <Card>
            <h2 className="text-2xl md:text-3xl font-extrabold text-grey-500 text-center">Transform your kitchen hood from this:</h2>
            <div className="w-full flex flex-wrap items-center justify-center my-2 mb-6">
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-grey-500 text-center mb-4">To this:</h2>
            <div className="w-full flex flex-wrap items-center justify-center my-2 mb-6">
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



