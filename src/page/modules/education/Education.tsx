import { FC } from 'react'
import { IoBook } from 'react-icons/io5'
import HeadingSection from '../../ui/headers/HeadingSection'
import SectionSubHeading from '../../ui/headers/SectionSubHeading'
import IconGlow from '../../ui/icons/IconGlow'
import { Line } from '../../ui/line/Line'
import EducationBox from './educ-box/EducationBox'
import styles from './Education.module.scss'
import sharedStyles from '../Section.module.scss';
import { getIntersectDefaultOpt } from '../../utils/general.utils'
import { useIntersect } from '../../../hooks/useIntersect'

const Education: FC = () => {

    const { ref, isIntersecting } = useIntersect({ options: getIntersectDefaultOpt() });

    return (
        <section id='education' ref={ref}>
            <div className={`${sharedStyles.section_wrapper} ${styles.eductation_wrapper} 
            ${isIntersecting && sharedStyles.visible}`}>
                <Line />
                <IconGlow bgGlow="complimentary">
                    <IoBook />
                </IconGlow>
                <HeadingSection>
                    Education
                </HeadingSection>
                <SectionSubHeading
                    textAccent='How I learned'
                    textMain='Resources I used to gain knowledge'
                    accentColor="complimentary"
                />
                <Line />
            </div>
            <EducationBox />
        </section>
    )
}

export default Education
