import { FC } from 'react'
import { useDetectCollision } from '../../../hooks/useDetectCollision';
import AnimatedImg from '../../ui/image/animated/AnimatedImg'
import styles from './EscapeImg.module.scss';

const EscapeImg: FC = () => {

    const { ref, isCollided } = useDetectCollision()

    return (
        <div className={styles.wrapper} ref={ref}>
            <AnimatedImg imgSrc='https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp' alt="" />
        </div>
    )
}

export default EscapeImg
