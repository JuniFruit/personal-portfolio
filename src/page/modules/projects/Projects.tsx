import { FC } from 'react';
import { IoBriefcase } from 'react-icons/io5';
import HeadingSection from '../../ui/headers/HeadingSection';
import SectionSubHeading from '../../ui/headers/SectionSubHeading';
import IconGlow from '../../ui/icons/IconGlow';
import { Line } from '../../ui/line/Line';
import ProjectsContainer from './projects-container/ProjectsContainer';
import styles from './Projects.module.scss';
import sharedStyles from '../Section.module.scss';

const Projects: FC = () => {
    return (
        <section id='projects'>
            <div className={`${sharedStyles.section_wrapper} ${styles.projects_wrapper}`}>
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
