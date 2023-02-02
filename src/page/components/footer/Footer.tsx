import { FC } from 'react';
import { Line } from '../../ui/line/Line';
import styles from './Footer.module.scss';
const Footer: FC = () => {
    return (
        <footer className={styles.wrapper}>
            <Line />
        </footer>
    )
}

export default Footer
