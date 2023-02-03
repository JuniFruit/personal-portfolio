import emailjs from '@emailjs/browser';


export const EmailService = {

    async sendEmail(form: string | HTMLFormElement) {
        const result = await emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID!,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID!, form, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
        return result;
    }
} 