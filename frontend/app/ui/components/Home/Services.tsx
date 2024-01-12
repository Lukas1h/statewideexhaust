import { Card } from "..";
import Image from "next/image";
import Link from "next/link";
export default function Services(){
    return (
        <>
        <h1 className="text-3xl md:text-5xl font-bold text-grey-500 text-center mt-8 mb-2 items-left">Services</h1>
        <Card className="services-card">
            <div className="flex flex-col items-center justify-center ">
                <h2 className="text-2xl font-bold text-center text-grey-500">Kitchen Exhaust Hood Cleaning and Grease Removal</h2>
                <div className="flex flex-col md:flex-row ">
                    <div className="m-2 flex flex-col">
                        <Image 
                            src={"/hoods/dirty5.webp"}
                            alt="Dirty Hood"
                            width={800}
                            height={600}
                            className="rounded-md"
                        />
                        <figcaption className="font-bold">Before</figcaption>
                    </div>
                    <div className="m-2 flex flex-col">
                        <Image 
                            src={"/hoods/clean5.webp"}
                            alt="Clean Hood"
                            width={800}
                            height={600}
                            className="rounded-md"
                        />
                        <figcaption className="font-bold">After</figcaption>
                    </div>
                </div>
                <div className="mx-2 mb-8 text-lg">
                    <p>Statewide safely and effectively steam cleans and degreases the kitchen exhaust hood in compliance with local, state, and health code regulations. In compliance with NFPA ’96 code and standards.</p>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-center text-grey-500">Sales and Installation of Steel Hood Baffle Filters</h2>
                <div className="flex flex-col md:flex-row">
                    <div className="m-2 mx-auto flex flex-col">
                        <Image 
                            src={"/hoods/filterwide.webp"}
                            alt="Dirty Hood"
                            width={760}
                            height={428}
                            className="rounded-md w-full"
                        />
                        <figcaption className="font-bold w-full text-center">Hood Filter</figcaption>
                    </div>
                </div>
                <div className="mx-2 text-lg mb-8">
                    <p>Statewide provides a range of sizes and types of hood filters. <Link className="underline font-semibold" href={"/contact-us"}>Contact Us</Link> for pricing.</p>
                </div>
            </div>


            <div>
                <h2 className="text-2xl font-bold text-center text-grey-500">Hood Light Globes and Misc. Hood Equipment Sales and Installation</h2>
                <div className="flex flex-col md:flex-row">
                    <div className="m-2 flex flex-col">
                        <Image 
                            src={"/hoods/hoodglobe.webp"}
                            alt="Dirty Hood"
                            width={800}
                            height={600}
                            className="rounded-md"
                        />
                        <figcaption className="font-bold">Hood Globes</figcaption>
                    </div>
                    <div className="m-2 flex flex-col">
                        <Image 
                            src={"/hoods/hoodparts.webp"}
                            alt="Clean Hood"
                            width={800}
                            height={600}
                            className="rounded-md"
                        />
                        <figcaption className="font-bold">Hood Equipment</figcaption>
                    </div>
                </div>
                <div className="mx-2 mb-8 text-lg">
                    <p>Statewide stocks a range of hood accessories to help our customs stay compliant with codes.</p>
                </div>
            </div>


            <div>
                <h2 className="text-2xl font-bold text-center text-grey-500">Exhaust Fan Hinge Kit Sales And Installation</h2>
                <div className="flex flex-col md:flex-row">
                    <div className="m-2 flex flex-col">
                        <Image 
                            src={"/hoods/hinge.webp"}
                            alt="Dirty Hood"
                            width={800}
                            height={600}
                            className="rounded-md"
                        />
                        <figcaption className="font-bold">Hinge Kit</figcaption>
                    </div>
                    <div className="m-2 flex flex-col">
                        <Image 
                            src={"/hoods/hinge2.webp"}
                            alt="Clean Hood"
                            width={800}
                            height={600}
                            className="rounded-md"
                        />
                        <figcaption className="font-bold">Hinge Kit</figcaption>
                    </div>
                </div>
                <div className="mx-2 text-lg">
                    <p>Statewide installs and sells roof top exhaust fan hinge kits.  <Link className="underline font-semibold" href={"/contact-us"}>Contact Us</Link> for pricing.</p>
                </div>
            </div>


        </Card>
        </>
    )
}