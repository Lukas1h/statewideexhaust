import CreateTwilloClient from "twilio"

const fromSMS = process.env.FROM_SMS
const toSMS = process.env.TO_SMS
const accountSid = process.env.TWILLO_SID
const authToken = process.env.TWILLO_API_KEY

const Twillo = CreateTwilloClient(accountSid, authToken);

async function sendSMS(message:string){
    try {
        const twilloResponce = await Twillo.messages
        .create({
            body: message,
            from: fromSMS,
            to: toSMS!
        })
        if(twilloResponce.errorMessage){
            throw twilloResponce.errorMessage
        }else{
            console.log("Sent SMS!");
        }
    }catch(error){
        console.error("Failed to send SMS",error)
    }
}

export default Twillo
export {sendSMS}