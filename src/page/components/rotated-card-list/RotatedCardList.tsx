import { FC } from 'react'
import { IRotatedCardList } from './Card.interface'
import styles from './Card.module.scss';
import { CardItem } from './CardItem';

const RotatedCardList: FC<IRotatedCardList> = ({ items }) => {
    return (
        <div className={styles.list_wrapper}>
            {
                items.map(item => (
                    <CardItem
                        key={item.title}
                        {...{ ...item }}
                    />
                ))
            }

        </div>
    )
}

export default RotatedCardList
