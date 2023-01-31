import { FC } from 'react'
import { useIsMobile } from '../../../../hooks/useIsMobile';
import Logo from '../../../ui/logo/Logo'
import Links from './list/Links'
import MobileNav from './mobile/MobileNav';
import styles from './RightNav.module.scss';

const RightNav: FC = () => {

    const { isMobile } = useIsMobile()

    return (
        <nav className={styles.right_nav}>
            {!isMobile ?
                <>
                    <Logo />
                    <Links />
                </>
                :
                <MobileNav />
            }
        </nav>
    )
}

export default RightNav
