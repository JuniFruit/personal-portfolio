import { FC } from 'react';
import HeroImg from '../../components/hero-img/HeroImg';
import EscapeImg from '../../components/mouse-escape/EscapeImg';
import Heading from '../../components/site-heading/Heading';
import AnimatedImg from '../../ui/image/animated/AnimatedImg';
import { Line } from '../../ui/line/Line';
import styles from './Hero.module.scss';

const Hero: FC = () => {
    return (
        <section className={styles.section_wrapper} id='home'>
            {/* <AnimatedImg imgSrc='https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp' alt="" /> */}
            {/* <EscapeImg /> */}
            <HeroImg />
            <Line />
            <Heading />

        </section>
    )
}

export default Hero
