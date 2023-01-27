import { FC } from 'react';
import Heading from '../../components/site-heading/Heading';
import { Line } from '../../ui/line/Line';
import styles from './Hero.module.scss';

const Hero: FC = () => {
    return (
        <section className={styles.section_wrapper}>
            <div className={styles.img_container}>

            </div>

            <Line />
            <Heading />

        </section>
    )
}

export default Hero
