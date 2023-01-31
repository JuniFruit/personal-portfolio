import { FC } from 'react';
import Logo from '../../../../../ui/logo/Logo';
import Links from '../../list/Links';
import { ILinks } from '../../list/Links.interface';
import styles from './Dropdown.module.scss';


interface IDropdown extends ILinks { }

const Dropdown: FC<IDropdown> = (props) => {
    return (
        <div className={styles.container} onClick={(e) => !!props.onItemClick && props.onItemClick()}>
            <nav className={styles.menu_wrapper} onClick={(e) => { e.stopPropagation() }}>
                <Logo
                    {...{ ...props }}
                />
                <Links
                    {...{ ...props }}
                />
            </nav>

        </div>
    )
}

export default Dropdown
