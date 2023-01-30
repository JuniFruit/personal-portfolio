import { FC, PropsWithChildren } from 'react'
import { IoArrowForward } from 'react-icons/io5';
import { IButton } from './Button.interface'
import styles from './Button.module.scss';

export const ButtonRefer: FC<PropsWithChildren<IButton>> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <button
            className={styles.button_refer}
            {...rest}
        >
            {children}
            <IoArrowForward />
        </button>
    )
}

