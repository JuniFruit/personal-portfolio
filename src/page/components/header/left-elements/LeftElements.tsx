import { FC } from 'react';
import { IconLink } from '../../../ui/buttons/link/IconLink';
import styles from '../right-elements/list/Links.module.scss';
import { data } from './list/links.data';

const LeftElements: FC = () => {
    return (
        <ul className={styles.links_list}>
            {
                data.map(link => (
                    <li key={link.title}>
                        <IconLink
                            href={link.href}
                            title={link.title}
                            target="_blank"
                            aria-label={link.title}
                        >
                            {link.icon({})}
                        </IconLink>
                    </li>
                ))
            }
        </ul>
    )
}

export default LeftElements
