import { FC, PropsWithChildren } from 'react'
import { IHeading } from './Headers.interface'
import styles from './Headers.module.scss';

const HeadingSection: FC<PropsWithChildren<IHeading>> = (props) => {
    return (
        <h2
            {...{ ...props }}
            className={styles.heading_section}
        >
            {props.children}
        </h2>
    )
}

export default HeadingSection
