import { FC } from 'react';
import CodeBox from './components/code-box/CodeBox';
import Header from './components/header/Header';
import About from './modules/about/About';
import Hero from './modules/hero/Hero';
import Resume from './modules/resume/Resume';
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
                    <CodeBox />
                </main>
            </div>

        </div>
    )
}

export default Page
