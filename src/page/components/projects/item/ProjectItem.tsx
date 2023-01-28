import { FC } from 'react'
import { IProjectItem } from './ProjectItem.interface';
import { IoLogoGithub } from 'react-icons/io5';
import styles from './ProjectItem.module.scss';
import { IconLink } from '../../../ui/buttons/link/IconLink';


export const ProjectItem: FC<IProjectItem> = ({ title, shortDescription, gitHubLink, ...rest }) => {
    return (
        <div
            {...{ ...rest }}
            tabIndex={0}
            className={styles.wrapper}>
            <div className={styles.content}>
                <h3>
                    {title}
                </h3>
                <p>
                    {shortDescription}
                </p>
            </div>
            <IconLink href={gitHubLink} target={'_blank'}>
                <IoLogoGithub />
            </IconLink>
            <span className={styles.curtain}></span>
        </div>
    )
}

