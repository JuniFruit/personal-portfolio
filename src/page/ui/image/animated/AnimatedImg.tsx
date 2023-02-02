import { FC } from 'react';
import { IImage } from '../Image.interface';
import styles from '../Image.module.scss';

const AnimatedImg: FC<IImage> = (props) => {

    if (!props.imgSrc) return null;

    return (
        <div
            style={{ backgroundImage: `url(${props.imgSrc})` }}
            className={styles.animated_wrapper}
        >

        </div>
    )
}

export default AnimatedImg
