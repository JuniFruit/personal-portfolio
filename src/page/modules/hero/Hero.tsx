import { FC } from 'react';
import HeroImg from '../../components/hero-img/HeroImg';
import Heading from '../../components/site-heading/Heading';
import { Line } from '../../ui/line/Line';
import styles from './Hero.module.scss';

const Hero: FC = () => {
    return (
        <section className={styles.section_wrapper} id='home'>

            <HeroImg />
            <Line />
            <Heading />

        </section>
    )
}

export default Hero
