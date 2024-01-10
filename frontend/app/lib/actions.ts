'use server';

import {sendSMS} from "./twillo";
import {sendEmail} from "./sendgrid"
import { redirect } from 'next/navigation'



export async function handleContactUs(formData:any){
    const parsedFormData = {
        name:formData.get("name"),
        email:formData.get("email"),
        phone:formData.get("phone"),
        location:formData.get("location"),
        message:formData.get("message"),
    }

    // const message = `
    // From: ${parsedFormData.name}
    // Email: ${parsedFormData.email}
    // Phone: ${parsedFormData.phone}
    // Location: ${parsedFormData.location}
    // Message: ${parsedFormData.message}

    // Reply STOP to unsubscribe.` //We don't actualy handle this, it's just in the message to prevent messages from being blocked by carriers.

const message = `
New message from ${parsedFormData.name}:
${parsedFormData.message}


You can contact them at ${parsedFormData.email} or ${parsedFormData.phone}.

Reply STOP to unsubscribe.`

    //sendSMS(message)
    sendEmail(message)
    redirect("/?show-contact-successful=true")
}