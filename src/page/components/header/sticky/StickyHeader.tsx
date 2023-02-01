import { FC } from 'react'
import { useScrollProgress } from '../../../../hooks/useScrollProgress';
import Header from '../Header'
import styles from './Sticky.module.scss';


const StickyHeader: FC = () => {
    const progress = useScrollProgress()

    return (
        <div className={`${styles.sticky_header} ${progress > 10 && styles.active}`}>
            <Header />
        </div>
    )
}

export default StickyHeader
