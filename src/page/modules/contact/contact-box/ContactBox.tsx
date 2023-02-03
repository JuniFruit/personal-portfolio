import { FC, useState, useEffect } from 'react'
import { EmailJSResponseStatus } from '@emailjs/browser';
import { EmailService } from '../../../../services/EmailJS';
import ContactForm from '../../../components/contact-form/ContactForm'
import { IContactFields } from '../../../components/contact-form/ContactForm.interface'
import CodeHeading from '../../../ui/headers/CodeHeading'
import styles from './ContactBox.module.scss';
import Handler from './handler/Handler';

const ContactBox: FC = () => {

    const [result, setResult] = useState<EmailJSResponseStatus | null>(null)

    const handleSubmit = (data: IContactFields, form: HTMLFormElement) => {

        EmailService.sendEmail(form).then(res => setResult(res)).catch(error => setResult(error));
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setResult(null)
        }, 4000)

        return () => {
            clearTimeout(timeout);
        }

    }, [result])

    return (
        <div className={styles.wrapper}>
            <CodeHeading
                accentColor="complimentary"
            >
                Form
            </CodeHeading>
            <div className={styles.form_wrapper}>
                <ContactForm
                    onSubmitForm={handleSubmit}
                />
            </div>
            <Handler
                result={result}
            />
            <CodeHeading
                accentColor="complimentary"
            >
                / Form
            </CodeHeading>
        </div>
    )
}

export default ContactBox
