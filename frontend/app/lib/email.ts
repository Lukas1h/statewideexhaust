import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";


const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY!,
});

const sentFrom = new Sender(process.env.FROM_EMAIL!, "Statewide Exhaust Services LLC.");


//TODO: Comment out lines for SMS when Mailersend account is verified.
const recipients = [
new Recipient(process.env.TO_EMAIL!, "Gary Hahn"),
// new Recipient(`${process.env.TO_EMAIL!}@email.uscc.net`, "Gary Hahn"), 
];

const devRecipients = [
new Recipient(process.env.TO_EMAIL_DEV!, "Lukas Hahn"),
// new Recipient(`${process.env.TO_SMS_DEV!}@email.uscc.net`, "Lukas Hahn"),
];





async function sendEmail(message:string){
   

    const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(process.env.VERCEL_ENV == "production" ? recipients : devRecipients)
    .setReplyTo(sentFrom)
    .setSubject("New Contact From Submision on \"statewideexhaustservices.com\"")
    .setHtml(`<p>${message}</p>`) 
    .setText(message);

    await mailerSend.email.send(emailParams);
    console.log(`Sent email(s) to ${("production" ? recipients : devRecipients).map((r)=>{return r.email}).join(", ")}`);
    

}
export {sendEmail}

//@1OU982.]9L84.2R