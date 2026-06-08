
import { Card } from "../ui/components";
import { ContactForm } from "@/app/ui/components"
import { ContactUs } from "../ui/components";
import Link from "next/link";


export const metadata = {
    title: "Thank You"
}


export default function ThankYou() {
    return (

        <div className="min-h-screen flex flex-col justify-center mx-auto">
            <h1
                className="text-4xl md:text-5xl font-extrabold tracking-tight text-black text-center mt-8"
                id="why-choose-us"
            >
                Thank You
            </h1>

            <p className="text-center text-lg text-neutral-600 mt-0 mb-10 max-w-2xl mx-auto">
                Need a quote or have questions about exhaust repairs, custom work, or installations?
                Send us a message and we'll get back to you.
            </p>


            <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto mb-8">

                <div className="rounded-lg border p-6 shadow-sm">
                    <h2 className="text-2xl font-bold">Why Choose Us?</h2>
                    <p className="mt-1 text-lg text-neutral-600 leading-6">
                        Serving Eugene for over 20 years, Statewide Exhaust Hood Cleaning provides NFPA-certified hood cleaning, code-compliant service, and the personalized attention of a family-owned company committed to quality and fire safety.
                    </p>
                    <Link
                        href="/#why-choose-us"
                        className="text-red-600 hover:underline font-extrabold mt-4 rounded-full text-lg block"
                    >
                        Learn Why Businesses Choose Us {"->"}
                    </Link>

                </div>

                <div className="rounded-lg border p-6 shadow-sm">
                    <h2 className="text-2xl font-bold">Our Services</h2>
                    <p className="mt-1 text-lg text-neutral-600 leading-6">
                        We provide kitchen exhaust hood cleaning, grease removal, hood filter sales and installation, hood accessories, light globes, and exhaust fan hinge kits to help commercial kitchens stay safe and compliant.
                    </p>
                    <Link
                        href="/#services"
                        className="text-red-600 hover:underline font-extrabold mt-4 rounded-full text-lg block"
                    >
                        View All Services {"->"}
                    </Link>

                </div>
            </div>
        </div>


    );
}