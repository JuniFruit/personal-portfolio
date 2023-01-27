import { FC, PropsWithChildren } from 'react'
import styles from './Icons.module.scss';

const IconGlow: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.icon_main}>
            <span>

            </span>
            {children}
        </div>
    )
}

export default IconGlow
