import { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonRefer } from '../../ui/buttons/button/ButtonRefer';
import Field from '../../ui/fields/Field';
import TextArea from '../../ui/fields/TextArea';
import { validEmail } from '../../utils/format.utils';
import { IContactFields, IContactForm } from './ContactForm.interface';
import styles from './ContactForm.module.scss';

const ContactForm: FC<IContactForm> = ({ onSubmitForm }) => {

    const { register, formState: { errors }, handleSubmit } = useForm<IContactFields>({
        mode: "onChange"
    })

    const formRef = useRef<HTMLFormElement>(null);

    return (
        <form
            ref={formRef}
            onSubmit={(e) => { e.preventDefault(); handleSubmit((data) => onSubmitForm(data, formRef.current!))() }}
        >
            <div className={styles.form_top}>
                <div className={styles.credentials}>
                    <Field
                        {...register("firstName", {
                            required: 'Please enter your first name'
                        }
                        )}
                        error={errors.firstName}
                        fieldTitle="First Name"
                        required
                        placeholder='first name'
                    />
                    <Field {
                        ...register("lastName")
                    }
                        fieldTitle={"Last Name"}
                        placeholder='last name'
                    />
                </div>
                <div className={styles.email}>
                    <Field
                        {
                        ...register("email", {
                            pattern: {
                                value: validEmail,
                                message: 'Please provide a valid email'
                            }
                        })
                        }
                        error={errors.email}
                        fieldTitle={"Email"}
                        type="email"
                        placeholder='email'
                    />
                </div>
            </div>
            <TextArea
                {...register("message", {
                    required: 'Cannot be blank',
                })}
                placeholder="message"
                fieldTitle='Message'
                required
                maxLength={500}
                error={errors.message}
            />
            <ButtonRefer>
                Submit
            </ButtonRefer>
        </form>
    )
}

export default ContactForm
