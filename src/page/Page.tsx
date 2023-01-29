import { FC } from 'react';
import Header from './components/header/Header';
import About from './modules/about/About';
import Contact from './modules/contact/Contact';
import Education from './modules/education/Education';
import Hero from './modules/hero/Hero';
import Projects from './modules/projects/Projects';
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
                    <Projects />
                    <Skills />
                    <Education />
                    <Contact />
                </main>
            </div>

        </div>
    )
}

export default Page
