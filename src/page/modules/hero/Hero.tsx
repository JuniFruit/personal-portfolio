import { FC } from 'react';
import Heading from '../../components/site-heading/Heading';
import { Line } from '../../ui/line/Line';
import styles from './Hero.module.scss';

const Hero: FC = () => {
    return (
        <section className={styles.section_wrapper} id='home'>
            <div className={styles.img_container}>
                <svg
                    stroke='currentColor'
                    width={"1em"}
                    height={"1em"}
                    viewBox={'0 0 512 512'}
                    fill="currentColor"
                    strokeWidth={0}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M 810 502 a 8 8 0 0 0 -11.06 0 L 496 85 a 8 8 0 0 0 -441.4 -473.15 L 63.9 448 a 32 32 0 0 0 32 32 H 430 a 16 16 0 0 0 16 -16 V 524 a 8 8 0 0 1 -720 176 h 80 a 8 8 0 0 1 8 8 v 136 a 16 16 0 0 0 16 16 h 96.06 a 32 32 0 0 0 32 -32 V 282.94 a 8 8 0 0 0 -2.47 -5.79 Z"
                    />
                </svg>
            </div>

            <Line />
            <Heading />

        </section>
    )
}

export default Hero
