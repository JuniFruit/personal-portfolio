import { FC } from 'react';
import { IoMailOutline } from 'react-icons/io5';
import HeadingSection from '../../ui/headers/HeadingSection';
import SectionSubHeading from '../../ui/headers/SectionSubHeading';
import IconGlow from '../../ui/icons/IconGlow';
import { Line } from '../../ui/line/Line';
import ContactBox from './contact-box/ContactBox';
import styles from './Contact.module.scss';

const Contact: FC = () => {
    return (
        <section id='contact'>
            <div className={styles.section_wrapper}>
                <Line />
                <IconGlow bgGlow="complimentary">
                    <IoMailOutline />
                </IconGlow>
                <HeadingSection>
                    Contact
                </HeadingSection>
                <SectionSubHeading
                    textAccent='Contact me using form below'
                    textMain=''
                    accentColor="complimentary"
                />
                <Line />
            </div>
            <ContactBox />
        </section>
    )
}

export default Contact
