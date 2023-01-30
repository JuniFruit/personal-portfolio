import { FC } from 'react'
import RightNav from './right-elements/RightNav'
import styles from './Header.module.scss';
import LeftElements from './left-elements/LeftElements';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <RightNav />
            <LeftElements />
        </header>
    )
}

export default Header
