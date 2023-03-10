import { FC, PropsWithChildren } from 'react';
import { IButton } from './Button.interface';
import styles from './Button.module.scss';

export const DialogBtn: FC<PropsWithChildren<IButton>> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <button
            className={styles.dialog}
            {...rest}
        >
            {children}
        </button>
    )
}

