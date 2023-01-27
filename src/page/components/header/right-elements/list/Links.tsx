import { FC } from 'react'
import Link from '../../../../ui/buttons/link/Link'
import { linksData } from './linksData'
import styles from './Links.module.scss';

const Links: FC = () => {
    return (
        <ul className={styles.links_list}>
            {
                linksData.map(link => (
                    <li key={link.title}>
                        <Link href={link.href}>
                            {link.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Links
