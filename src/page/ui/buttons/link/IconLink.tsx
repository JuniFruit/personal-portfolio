import { FC, PropsWithChildren } from 'react'
import { ILink } from './Link.interface'
import styles from './Link.module.scss';
export const IconLink: FC<PropsWithChildren<ILink>> = ({ ...props }) => {
    return (
        <a
            className={styles.icon_link}
            {...{ ...props }}
            tabIndex={0}
        >

        </a>
    )
}

