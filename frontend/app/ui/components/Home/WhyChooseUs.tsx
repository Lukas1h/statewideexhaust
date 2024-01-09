import { Card,CTA } from "@/app/ui/components";

export default function WhyChooseUs(){
    return (
        <>
        <h1 className="text-3xl md:text-5xl font-bold text-grey-500 text-center mt-8 mb-2 items-left">Why Choose Us?</h1>
        <Card className="why-choose-us-card">
            <h2>Quality service you can count on.</h2>
            <p>We pride ourselves on giving our customers the quality hood cleaning services that they deserve.</p>

            <h2>Over 30 years of expert experience.</h2>
            <p>We are among the few with a combined three decades of experience. Just as important, we haven't lost our passion for providing that quality hood cleaning service you need in the state of Oregon.</p>

            <h2>Cuttin' grease the NFPA way.</h2>
            <p>When we clean your hoods, we make sure that all of the NFPA standards are followed to ensure the safety of your restaurant.</p>

            <h2>We provide service to Western Oregon</h2>
            <p>Including the cities of Eugene, Springfield, Roseburg, Coos Bay, Medford, Grants Pass, Brookings, and their surroundings. For cities not listed, call for details.</p>
        </Card>
        </>
    )
}