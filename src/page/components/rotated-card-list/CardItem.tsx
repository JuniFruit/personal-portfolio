import { FC } from 'react';
import { Image } from '../../ui/image/Image';
import { ICardItem } from './Card.interface';
import styles from './Card.module.scss';

export const CardItem: FC<ICardItem> = ({ title, img }) => {
    return (
        <div className={styles.card_wrapper}>
            <div className={styles.img_container}>
                {<Image
                    {...{ ...img }}
                />}
            </div>
            <h2>
                {title}
            </h2>
        </div>
    )
}

