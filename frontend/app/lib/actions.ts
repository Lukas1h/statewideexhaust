'use server';

import {sendSMS} from "./twillo";




export async function handleContactUs(formData:any){
    const parsedFormData = {
        name:formData.get("name")
    }

    sendSMS(`Hello from "${parsedFormData.name}".`)
}