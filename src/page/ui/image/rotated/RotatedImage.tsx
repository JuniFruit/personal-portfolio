import { FC } from 'react'
import { Image } from '../Image';
import { IImage } from '../Image.interface';
import styles from '../Image.module.scss';


export const RotatedImage: FC<IImage> = (props) => {

    if (!props.imgSrc) return null;

    return (
        <div className={styles.rotated_wrapper}>
            <Image
                {...{ ...props }}
            />
        </div>
    )
}

