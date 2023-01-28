import { FC } from 'react'
import CodeHeading from '../../../ui/headers/CodeHeading';
import ProjectsMain from './main/ProjectsMain';
import styles from './ProjectsContainer.module.scss';


const ProjectsContainer: FC = () => {
    return (
        <div className={styles.container_wrapper}>
            <CodeHeading accentColor="secondary">
                Projects
            </CodeHeading>
            <ProjectsMain />
            <CodeHeading accentColor="secondary">
                / Projects
            </CodeHeading>

        </div>
    )
}

export default ProjectsContainer
