import { FC } from 'react';
import { IoBriefcase } from 'react-icons/io5';
import { useIntersect } from '../../../hooks/useIntersect';
import HeadingSection from '../../ui/headers/HeadingSection';
import SectionSubHeading from '../../ui/headers/SectionSubHeading';
import IconGlow from '../../ui/icons/IconGlow';
import { Line } from '../../ui/line/Line';
import { getIntersectDefaultOpt } from '../../utils/general.utils';
import sharedStyles from '../Section.module.scss';
import ProjectsContainer from './projects-container/ProjectsContainer';
import styles from './Projects.module.scss';

const Projects: FC = () => {

    const { ref, isIntersecting } = useIntersect({ options: getIntersectDefaultOpt() });

    return (
        <section id='projects' ref={ref}>
            <div className={`${sharedStyles.section_wrapper} ${styles.projects_wrapper} 
            ${isIntersecting && sharedStyles.visible}`}>
                <Line />
                <IconGlow bgGlow="secondary">
                    <IoBriefcase />
                </IconGlow>
                <HeadingSection>
                    Projects
                </HeadingSection>
                <SectionSubHeading
                    textAccent='My personal projects'
                    textMain='Feel free to visit them all and to play around'
                    accentColor="secondary"
                />
                <Line />


            </div>
            <ProjectsContainer />
        </section>
    )
}

export default Projects
