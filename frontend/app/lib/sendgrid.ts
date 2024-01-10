import SendGrid from "@sendgrid/mail"

SendGrid.setApiKey(process.env.SENDGRID_API_KEY!)

async function sendEmail(message:string){
    SendGrid.send({
        to:"lukas1h07@gmail.com",
        from: "info@photobot.me",
        subject: "THis is a test",
        text:message,
        html:message
    })

}
export default SendGrid
export {sendEmail}

//@1OU982.]9L84.2R