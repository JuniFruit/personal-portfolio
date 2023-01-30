import { FC } from 'react'
import ContactForm from '../../../components/contact-form/ContactForm'
import { IContactFields } from '../../../components/contact-form/ContactForm.interface'
import CodeHeading from '../../../ui/headers/CodeHeading'
import styles from './ContactBox.module.scss';

const ContactBox: FC = () => {

    const handleSubmit = (data: IContactFields) => {
        console.log(data)
    }

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
            <CodeHeading
                accentColor="complimentary"
            >
                / Form
            </CodeHeading>
        </div>
    )
}

export default ContactBox
