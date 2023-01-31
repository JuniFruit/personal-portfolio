import { FC } from 'react'
import IconGlow from '../../ui/icons/IconGlow';
import { GiIfrit } from 'react-icons/gi';
import { Line } from '../../ui/line/Line';
import styles from './Skills.module.scss';
import sharedStyles from '../Section.module.scss';

import HeadingSection from '../../ui/headers/HeadingSection';
import SectionSubHeading from '../../ui/headers/SectionSubHeading';
import SkillsBox from './skills-box/SkillsBox';

const Skills: FC = () => {
    return (
        <section id='skills'>
            <div className={`${sharedStyles.section_wrapper} ${styles.skills_section}`}>
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
            </div>
            <SkillsBox />
        </section>
    )
}

export default Skills
