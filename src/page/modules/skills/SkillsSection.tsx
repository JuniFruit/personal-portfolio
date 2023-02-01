import { FC } from 'react'
import IconGlow from '../../ui/icons/IconGlow';
import { GiIfrit } from 'react-icons/gi';
import { Line } from '../../ui/line/Line';
import styles from './Skills.module.scss';
import sharedStyles from '../Section.module.scss';

import HeadingSection from '../../ui/headers/HeadingSection';
import SectionSubHeading from '../../ui/headers/SectionSubHeading';
import SkillsBox from './skills-box/SkillsBox';
import { getIntersectDefaultOpt } from '../../utils/general.utils';
import { useIntersect } from '../../../hooks/useIntersect';

const Skills: FC = () => {

    const { ref, isIntersecting } = useIntersect({ options: getIntersectDefaultOpt() });

    return (
        <section id='skills' ref={ref}>
            <div className={`${sharedStyles.section_wrapper} ${styles.skills_section} 
            ${isIntersecting && sharedStyles.visible}`}>
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
