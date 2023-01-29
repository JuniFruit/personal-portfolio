import { FC, PropsWithChildren } from 'react'
import styles from './Box.module.scss';


const Box: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Box
