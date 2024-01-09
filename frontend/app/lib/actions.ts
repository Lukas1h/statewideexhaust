'use server';

import {sendSMS} from "./twillo";
import { redirect } from 'next/navigation'



export async function handleContactUs(formData:any){
    const parsedFormData = {
        name:formData.get("name")
    }

    sendSMS(`Hello from "${parsedFormData.name}".`)
    redirect("/?show-contact-successful=true")
}