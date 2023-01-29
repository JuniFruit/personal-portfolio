import { FC } from 'react'
import { IoHome } from 'react-icons/io5';
import styles from './Logo.module.scss';

const Logo: FC = () => {
    return (
        <button onClick={() => window.scrollTo(0, 0)} className={styles.logo}>
            <IoHome />
        </button>
    )
}

export default Logo
