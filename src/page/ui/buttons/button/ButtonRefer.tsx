import { FC, PropsWithChildren } from 'react'
import { IoArrowForward } from 'react-icons/io5';
import { IButton, IButtonRefer } from './Button.interface'
import styles from './Button.module.scss';

export const ButtonRefer: FC<PropsWithChildren<IButtonRefer>> = ({
    children,
    className,
    isLoading,
    ...rest
}) => {
    return (
        <button
            className={`${styles.button_refer} ${isLoading ? styles.loading : ''}`}
            {...rest}
        >
            {isLoading ? 'Loading' : children}
            <IoArrowForward />
        </button>
    )
}

