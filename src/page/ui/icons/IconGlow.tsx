import { FC, PropsWithChildren } from 'react'
import { accentColor } from '../shared/Shared.type';
import styles from './Icons.module.scss';

const IconGlow: FC<PropsWithChildren<{ bgGlow: accentColor }>> = ({ children, bgGlow }) => {
    return (
        <div className={styles.icon_main}>
            <span className={styles[bgGlow]}>

            </span>
            {children}
        </div>
    )
}

export default IconGlow
