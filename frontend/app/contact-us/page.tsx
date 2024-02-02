
import { Card } from "../ui/components";
import {ContactForm} from "@/app/ui/components"
import Link from "next/link";


export const metadata = {
    title: "Contact Us"
}


export default function ContactUs(){
    return (

        <div className="flex md:flex-row flex-col items-center md:items-start m-2">
            <div className="flex-1 max-w-md m-2 w-full mb-8 md:mb-0 ">
                <h2 className="text-3xl text-center font-semibold md:mt-8">Get In Touch</h2>
                <p className="text-md md:text-lg text-center md:text-left">
                    Give us a call at <Link className="underline font-semibold" href={"tel:+15418177024"}>541-8177024</Link>, send us an email to <Link className="underline font-semibold" href={"mailto:gary@statewideexhaustservices.com"}>statewideexhaust@gmail.com</Link>, or fill out the contact form and well get back to you as soon as we can!
                </p>
            </div>
            <div className="flex-1 m-2">
                <ContactForm></ContactForm>
            </div>
        </div>

    )
}