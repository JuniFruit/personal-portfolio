import { FC, PropsWithChildren } from 'react'
import { IButton } from './Button.interface'
import styles from './Button.module.scss';

export const ButtonLink: FC<PropsWithChildren<IButton>> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <button
            className={styles.button_link}
            {...rest}
        >
            {children}

        </button>
    )
}

