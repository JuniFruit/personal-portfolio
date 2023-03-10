import { FC, PropsWithChildren } from 'react'
import { ILink } from './Link.interface';
import styles from './Link.module.scss';

const Link: FC<PropsWithChildren<ILink>> = ({ ...props }) => {
    return (
        <a
            className={styles.link}
            {...{ ...props }}
            tabIndex={0}
        >

        </a>
    )
}

export default Link
