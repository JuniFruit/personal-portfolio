import { FC } from 'react'
import { ProjectItem } from '../../../../../components/projects/item/ProjectItem';
import { projectList } from './Projects.data';
import { IProjectList } from './ProjectsList.interface';
import styles from './ProjectsList.module.scss';

export const ProjectsList: FC<IProjectList> = ({ onItemClick, onItemHover }) => {

    return (
        <div className={styles.wrapper}>
            {
                projectList.map((project, ind) => (
                    <ProjectItem
                        key={ind}
                        {...{ ...project }}
                        onClick={() => onItemClick(project.link)}
                        onMouseOver={() => onItemHover(project.imgSrc)}
                    />
                ))
            }
        </div>
    )
}

