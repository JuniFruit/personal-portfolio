import { FC } from 'react'
import { IImage } from './Image.interface'
import styles from './Image.module.scss';

export const Image: FC<IImage> = ({ imgSrc, alt }) => {
    return (
        <img
            className={styles.img_element}
            src={imgSrc}
            alt={alt}
        />
    )
}

