import CreateTwilloClient from "twilio"

const fromSMS = process.env.FROM_SMS
const toSMS = process.env.VERCEL_ENV == "production" ? process.env.TO_SMS : process.env.TO_SMS_DEV //Use dev phone number during development

const accountSid = process.env.TWILLO_SID
const authToken = process.env.TWILLO_API_KEY

const Twillo = CreateTwilloClient(accountSid, authToken);

async function sendSMS(message:string){
    const twilloResponce = await Twillo.messages
    .create({
        body: message,
        from: fromSMS,
        to: toSMS!
    })
    if(twilloResponce.errorMessage){
        throw twilloResponce.errorMessage
    }else{
        console.log("Sent "+message+" to ",toSMS);
    }
}

export {sendSMS}