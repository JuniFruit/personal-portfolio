import { FC } from 'react'
import Field from '../../ui/fields/Field';
import styles from './ContactForm.module.scss';

const ContactForm: FC = () => {
    return (
        <form>
            <div className={styles.form_top}>
                <div className={styles.credentials}>
                    <Field />
                    <Field />
                </div>
                <div className={styles.email}>
                    <Field />
                </div>
            </div>
            <Field />
        </form>
    )
}

export default ContactForm
