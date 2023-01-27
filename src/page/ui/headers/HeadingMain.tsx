import { FC, PropsWithChildren } from 'react'
import { IHeading } from './Headers.interface'
import styles from './Headers.module.scss';

const HeadingMain: FC<PropsWithChildren<IHeading>> = ({ children, ...rest }) => {
    return (
        <h1
            {...{ ...rest }}
            className={styles.heading_main}
        >
            {children}
        </h1>
    )
}

export default HeadingMain
