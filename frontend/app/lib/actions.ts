'use server';

import { sendSMS } from "./sms";
import { sendEmail } from "./email"
import { redirect } from 'next/navigation'



export async function handleContactUs(formData: any) {

    // return true
    const parsedFormData = {
        name: formData.get("name"),
        companyName: formData.get("companyName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        location: formData.get("location"),
        message: formData.get("message"),
    }

    const message = `
    New message from ${parsedFormData.name}:
    ${parsedFormData.message}


    You can contact them at ${parsedFormData.email} or ${parsedFormData.phone}.

    Reply STOP to unsubscribe.`

    // sendSMS(`New contact form submission from ${parsedFormData.name} at ${parsedFormData.companyName}. Check your email to view the details.`)
    await sendEmail(message)
    redirect("/?show-contact-successful=true")
}