import { Card, CTA } from "@/app/ui/components";
import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUs() {
    return (
        <>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black text-center mt-10 mb-6">Why Choose Us?</h1>
            <Card className="why-choose-us-card rounded-none max-w-none w-screen m-0 p-0 mb-24">
                <div className="max-w-6xl flex flex-col md:flex-row gap-2 mx-auto">

                    <div className="flex-1 mb-4 md:mb-0 text-center md:text-left max-w-[500px] mx-auto">
                        <h2 className="text-black text-2xl font-bold tracking-wide mb-2">Serving <span className="underline">Eugene</span> for Over 20 Years</h2>
                        <p className="text-gray-700 leading-relaxed text-base">Statewide Exhaust Hood Cleaning has proudly served Eugene and the surrounding communities for more than two decades. We understand the needs of local restaurants and deliver dependable, thorough hood cleaning you can count on.</p>

                    </div>
                    <div className="flex-1 mb-4 md:mb-0 text-center md:text-left max-w-[500px] mx-auto">
                        <h2 className="text-black text-2xl font-bold tracking-wide  mb-2"><span className="underline">NFPA Certified</span> & Code Compliant</h2>
                        <p className="text-gray-700 leading-relaxed text-base">We are NFPA certified and clean to the highest industry standards. Every service is performed with strict attention to fire safety codes, helping protect your kitchen, your staff, and your investment.</p>
                    </div>
                    <div className="flex-1 text-center md:text-left max-w-[500px] mx-auto">
                        <h2 className="text-black text-2xl font-bold tracking-wide  mb-2"><span className="underline">Family-Owned.</span> Quality You Can See.</h2>
                        <p className="text-gray-700 leading-relaxed text-base">As a family-owned and operated company, we focus on quality and personal service that larger companies often overlook. When you hire us, you work directly with professionals who take pride in every job and stand behind their work.</p>

                    </div>






                </div>
                <p className="text-grey-500 text-sm w-full text-center mt-3 mb-[-1rem]">
                    Contact <Link href={"https://silverliningcleaners.com/"} className="font-bold underline underline-offset-2"> Silver Lining Hood Cleaners</Link> for Portland area.
                </p>

            </Card>
        </>
    )
}