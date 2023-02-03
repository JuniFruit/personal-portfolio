import { FC } from 'react'
import { images } from '../../../assets/images/images';
import AnimatedImg from '../../ui/image/animated/AnimatedImg'
import styles from './Img.module.scss';

const HeroImg: FC = () => {
    return (
        <div className={styles.wrapper}>
            <AnimatedImg imgSrc={images.ufo} alt="" />
        </div>
    )
}

export default HeroImg
