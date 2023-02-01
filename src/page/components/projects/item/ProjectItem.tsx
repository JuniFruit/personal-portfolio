import { FC } from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { useIntersect } from '../../../../hooks/useIntersect';
import { IconLink } from '../../../ui/buttons/link/IconLink';
import { IProjectItem } from './ProjectItem.interface';
import styles from './ProjectItem.module.scss';


export const ProjectItem: FC<IProjectItem> = ({ title, shortDescription, gitHubLink, ...rest }) => {

    const { ref, isIntersecting } = useIntersect({ options: { rootMargin: '150px 0px -50px 0px' } })

    return (
        <div className={`${isIntersecting && styles.visible} ${styles.container}`} ref={ref}>
            <div
                {...{ ...rest }}
                tabIndex={0}
                className={`${styles.wrapper}`}>
                <div className={styles.content}>
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {shortDescription}
                    </p>
                </div>
                <IconLink
                    href={gitHubLink}
                    onClick={(e) => e.stopPropagation()}
                    target={'_blank'}
                    title={`${title} repository`}
                    aria-label={`Go to ${title} github repository`}
                >
                    <IoLogoGithub />
                </IconLink>
                <span className={styles.curtain}></span>
            </div>

        </div>
    )
}

