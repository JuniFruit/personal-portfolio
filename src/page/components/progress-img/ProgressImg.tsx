import { FC } from 'react'
import { useScrollProgress } from '../../../hooks/useScrollProgress'
import AnimatedImg from '../../ui/image/animated/AnimatedImg'
import styles from './ProgressImg.module.scss';

const ProgressImg: FC = () => {

    const progress = useScrollProgress()

    return (
        <div
            className={styles.wrapper}
            style={{
                transform: `translateX(${(((progress / 100) * window.innerHeight) * 5) * -1}%)`
            }}
        >
            <AnimatedImg imgSrc='https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp' alt="" />

        </div>
    )
}

export default ProgressImg
