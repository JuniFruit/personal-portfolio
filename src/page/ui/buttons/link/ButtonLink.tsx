import { FC, PropsWithChildren } from 'react'
import styles from '../button/Button.module.scss';
import { ILink } from './Link.interface';

export const ButtonLink: FC<PropsWithChildren<ILink>> = ({ children, ...rest }) => {
    return (
        <a
            {...{ ...rest }}
            className={styles.button_main}
        >
            {children}
        </a>
    )
}

