import { FC } from 'react'
import { IoHome } from 'react-icons/io5';
import { ILinks } from '../../components/header/right-elements/list/Links.interface';
import styles from './Logo.module.scss';


interface ILogo extends ILinks { }



const Logo: FC<ILogo> = ({ onItemClick }) => {

    const root = document.getElementById('root');

    return (
        <button onClick={() => { root!.scrollTo(0, 0); !!onItemClick && onItemClick() }} className={styles.logo}>
            <IoHome />
        </button>
    )
}

export default Logo
