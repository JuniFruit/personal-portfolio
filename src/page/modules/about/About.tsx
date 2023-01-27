import { FC } from 'react';
import { IoInformation } from 'react-icons/io5';
import HeadingSection from '../../ui/headers/HeadingSection';
import SectionSubHeading from '../../ui/headers/SectionSubHeading';
import IconGlow from '../../ui/icons/IconGlow';
import { Line } from '../../ui/line/Line';
import styles from './About.module.scss';

const About: FC = () => {

    return (
        <div className={styles.section_wrapper}>
            <IconGlow>
                <IoInformation />
            </IconGlow>
            <HeadingSection>
                About Me
            </HeadingSection>
            <SectionSubHeading
                textAccent='Here you can learn a little more about me'
                textMain='Feel free to check my links as well'
                accentColor='additional'
            />
            <Line />
        </div>
    )
}

export default About
