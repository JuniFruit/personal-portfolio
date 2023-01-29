import { FC } from 'react';
import { IoInformation } from 'react-icons/io5';
import HeadingSection from '../../ui/headers/HeadingSection';
import SectionSubHeading from '../../ui/headers/SectionSubHeading';
import IconGlow from '../../ui/icons/IconGlow';
import { Line } from '../../ui/line/Line';
import AboutCodeBox from './about-code-box/AboutCodeBox';
import styles from './About.module.scss';

const About: FC = () => {

    return (
        <section id='about'>
            <div className={styles.section_wrapper}>
                <IconGlow bgGlow="additional">
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
            <AboutCodeBox />

        </section>
    )
}

export default About
