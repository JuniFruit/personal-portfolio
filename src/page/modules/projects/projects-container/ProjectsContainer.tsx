import { FC } from 'react';
import CodeHeading from '../../../ui/headers/CodeHeading';
import ProjectsMain from './main/ProjectsMain';


const ProjectsContainer: FC = () => {
    return (
        <div className='ml-5'>
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
