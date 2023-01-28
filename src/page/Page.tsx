import { FC } from 'react';
import Header from './components/header/Header';
import About from './modules/about/About';
import AboutCodeBox from './modules/about/about-code-box/AboutCodeBox';
import Hero from './modules/hero/Hero';
import Projects from './modules/projects/Projects';
import ProjectsContainer from './modules/projects/projects-container/ProjectsContainer';
import Resume from './modules/resume/Resume';
import Skills from './modules/skills/SkillsSection';
import styles from './Page.module.scss';

const Page: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Header />
                <main>
                    <Hero />
                    <Resume />
                    <About />
                    <AboutCodeBox />
                    <Projects />
                    <ProjectsContainer />
                    <Skills />
                </main>
            </div>

        </div>
    )
}

export default Page
