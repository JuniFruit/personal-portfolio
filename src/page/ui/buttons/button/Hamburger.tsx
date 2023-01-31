import { FC } from 'react';
import { IButton } from './Button.interface';
import styles from './Button.module.scss';

interface IHamburger extends IButton {
    isActive: boolean
}

const Hamburger: FC<IHamburger> = ({
    className,
    isActive,
    ...rest

}) => {

    return (
        <button
            className={`${styles.hamburger} ${isActive && styles.hamburger_active}`}
            {...rest}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default Hamburger
