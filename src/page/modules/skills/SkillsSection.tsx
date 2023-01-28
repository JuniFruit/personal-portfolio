import { FC } from 'react'
import IconGlow from '../../ui/icons/IconGlow';
import { GiIfrit } from 'react-icons/gi';
import { Line } from '../../ui/line/Line';
import styles from './Skills.module.scss';
import HeadingSection from '../../ui/headers/HeadingSection';
import SectionSubHeading from '../../ui/headers/SectionSubHeading';

const Skills: FC = () => {
    return (
        <section className={styles.section_wrapper}>
            <Line />
            <IconGlow bgGlow="complimentary">
                <GiIfrit />
            </IconGlow>
            <HeadingSection>
                Skills
            </HeadingSection>
            <SectionSubHeading
                textAccent='Technologies I use for my projects'
                textMain=''
                accentColor="complimentary"
            />
            <Line />


        </section>
    )
}

export default Skills
