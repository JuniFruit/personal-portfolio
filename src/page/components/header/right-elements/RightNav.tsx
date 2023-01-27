import { FC } from 'react'
import Logo from '../../../ui/logo/Logo'
import Links from './list/Links'
import styles from './RightNav.module.scss';

const RightNav: FC = () => {
    return (
        <nav className={styles.right_nav}>
            <Logo />
            <Links />
        </nav>
    )
}

export default RightNav
