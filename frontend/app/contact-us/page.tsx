"use client";
import { Card } from "../ui/components";
import {ContactForm} from "@/app/ui/components"
import Link from "next/link";

export default function ContactUs(){
    return (

        <div className="md:flex flex-row">
            <div className="flex-1 max-w-md m-2 w-full mb-8 md:mb-0">
                <h2 className="text-3xl text-center font-semibold md:mt-8">Get In Touch</h2>
                <p className="text-lg">
                    Give us a call at <Link className="underline font-semibold" href={"tel:541-679-0225"}>541-679-0225</Link>, send us an email to <Link className="underline font-semibold" href={"mailto:gary@statewideexhaustservices.com"}>statewideexhaust@gmail.com</Link>, or fill out the contact form and well get back to you as soon as we can!
                </p>
            </div>
            <div className="flex-1 m-2">
                <ContactForm></ContactForm>
            </div>
        </div>

    )
}