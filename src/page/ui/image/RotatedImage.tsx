import { FC } from 'react'
import { IImage } from './Image.interface';
import styles from './Image.module.scss';


export const RotatedImage: FC<IImage> = ({ imgSrc, alt }) => {

    if (!imgSrc) return null;

    return (
        <div className={styles.rotated_wrapper}>
            <img
                src={imgSrc}
                alt={alt}
            />
        </div>
    )
}

