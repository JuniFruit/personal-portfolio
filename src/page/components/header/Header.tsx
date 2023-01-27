import { FC } from 'react'
import RightNav from './right-elements/RightNav'
import styles from './Header.module.scss';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <RightNav />
        </header>
    )
}

export default Header
