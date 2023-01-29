import { FC } from 'react'
import ContactForm from '../../../components/contact-form/ContactForm'
import CodeHeading from '../../../ui/headers/CodeHeading'

const ContactBox: FC = () => {
    return (
        <div className='ml-5'>
            <CodeHeading
                accentColor="complimentary"
            >
                Contact
            </CodeHeading>
            <ContactForm />
            <CodeHeading
                accentColor="complimentary"
            >
                / Contact
            </CodeHeading>
        </div>
    )
}

export default ContactBox
