import { FC } from 'react'
import AnimatedImg from '../../ui/image/animated/AnimatedImg'
import styles from './Img.module.scss';

const HeroImg: FC = () => {
    return (
        <div className={styles.wrapper}>
            <AnimatedImg imgSrc='https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp' alt="" />
        </div>
    )
}

export default HeroImg
