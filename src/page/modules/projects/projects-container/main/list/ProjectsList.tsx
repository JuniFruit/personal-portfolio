import { FC } from 'react';
import { ProjectItem } from '../../../../../components/projects/item/ProjectItem';
import { projectList } from './Projects.data';
import { IProjectList } from './ProjectsList.interface';

export const ProjectsList: FC<IProjectList> = ({ onItemClick, onItemHover }) => {



    return (
        <div>
            {
                projectList.map((project, ind) => (
                    <ProjectItem
                        key={ind}
                        {...{ ...project }}
                        onClick={(e) => { e.stopPropagation(); onItemClick(project.link) }}
                        onMouseOver={() => onItemHover(project.imgSrc)}
                    />
                ))
            }

        </div>

    )
}

