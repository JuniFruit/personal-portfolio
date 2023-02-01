import { FC } from 'react';
import { IoMailOutline } from 'react-icons/io5';
import HeadingSection from '../../ui/headers/HeadingSection';
import SectionSubHeading from '../../ui/headers/SectionSubHeading';
import IconGlow from '../../ui/icons/IconGlow';
import { Line } from '../../ui/line/Line';
import ContactBox from './contact-box/ContactBox';
import styles from './Contact.module.scss';
import sharedStyles from '../Section.module.scss';
import { getIntersectDefaultOpt } from '../../utils/general.utils';
import { useIntersect } from '../../../hooks/useIntersect';

const Contact: FC = () => {

    const { ref, isIntersecting } = useIntersect({ options: getIntersectDefaultOpt() });

    return (
        <section id='contact' ref={ref}>
            <div
                className={`${sharedStyles.section_wrapper} 
                ${styles.contact_wrapper} ${isIntersecting && sharedStyles.visible}`}
            >
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
