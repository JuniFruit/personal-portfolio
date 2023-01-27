import { FC } from 'react'
import { IoHome } from 'react-icons/io5';
import styles from './Logo.module.scss';

const Logo: FC = () => {
    return (
        <a href='#' className={styles.logo}>
            <IoHome />
        </a>
    )
}

export default Logo
