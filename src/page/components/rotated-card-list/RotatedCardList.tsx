import { FC, useCallback } from 'react'
import { useIntersect } from '../../../hooks/useIntersect';
import { getIntersectDefaultOpt } from '../../utils/general.utils';
import { IRotatedCardList } from './Card.interface'
import styles from './Card.module.scss';
import { CardItem } from './CardItem';

const RotatedCardList: FC<IRotatedCardList> = ({ items }) => {

    const handleOnIntersect = useCallback((entry: IntersectionObserverEntry) => {
        (entry.target as HTMLElement).style.top = `-2.5rem`
        const duration = .15;
        entry.target.childNodes.forEach((child, ind) => {
            (child as HTMLElement).classList.add(`animate-scaleIn`);
            (child as HTMLElement).style.animationDelay = `${ind * duration}s`;
            (child as HTMLElement).style.animationDuration = `${duration}s`;
            (child as HTMLElement).style.animationFillMode = `forwards`;
        })
    }, [])

    const { ref } = useIntersect({ options: getIntersectDefaultOpt(), onIntersect: handleOnIntersect })

    return (
        <div className={styles.list_wrapper} ref={ref}>
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
