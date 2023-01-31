import { FC } from 'react';
import Link from '../../../../ui/buttons/link/Link';
import { ILinks } from './Links.interface';
import styles from './Links.module.scss';
import { linksData } from './linksData';

const Links: FC<ILinks> = ({ onItemClick }) => {
    return (
        <ul className={styles.links_list}>
            {
                linksData.map(link => (
                    <li key={link.title}>
                        <Link
                            href={link.href}
                            onClick={() => { !!onItemClick && onItemClick() }}
                        >
                            {link.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Links
