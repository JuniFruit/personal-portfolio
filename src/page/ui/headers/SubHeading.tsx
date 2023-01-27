import { FC, PropsWithChildren } from 'react'
import { IHeading } from './Headers.interface'
import styles from './Headers.module.scss';

const HeadingSub: FC<PropsWithChildren<IHeading>> = ({ children, ...rest }) => {
    return (
        <h2
            {...{ ...rest }}
            className={styles.heading_sub}
        >
            {children}
        </h2>
    )
}

export default HeadingSub
