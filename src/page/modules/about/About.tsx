import { FC } from 'react';
import { IoInformation } from 'react-icons/io5';
import { useIntersect } from '../../../hooks/useIntersect';
import HeadingSection from '../../ui/headers/HeadingSection';
import SectionSubHeading from '../../ui/headers/SectionSubHeading';
import IconGlow from '../../ui/icons/IconGlow';
import { Line } from '../../ui/line/Line';
import { getIntersectDefaultOpt } from '../../utils/general.utils';
import AboutCodeBox from './about-code-box/AboutCodeBox';
import styles from './About.module.scss';

const About: FC = () => {



    const { ref, isIntersecting } = useIntersect({ options: getIntersectDefaultOpt() });


    return (

        <section ref={ref} id='about'>

            <div
                className={`${styles.section_wrapper} ${isIntersecting && styles.visible}`}

            >
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
