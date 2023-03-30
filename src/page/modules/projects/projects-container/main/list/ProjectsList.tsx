import { FC } from "react";
import { FirestoreService } from "../../../../../../services/firestore.service";
import { ProjectItem } from "../../../../../components/projects/item/ProjectItem";
import { projectList } from "./Projects.data";
import { IProjectList } from "./ProjectsList.interface";

export const ProjectsList: FC<IProjectList> = ({
  onItemClick,
  onItemHover,
}) => {
  const addProjectClick = (title: string) => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) return;
    const projectClickInfo = {
      ...JSON.parse(userInfo),
      projectTitle: title,
    };
    FirestoreService.addProjectClick(projectClickInfo);
  };

  return (
    <div>
      {projectList.map((project, ind) => (
        <ProjectItem
          key={ind}
          {...{ ...project }}
          onClick={e => {
            e.stopPropagation();
            onItemClick(project.link);
            addProjectClick(project.title);
          }}
          onMouseOver={() => onItemHover(project.preview)}
        />
      ))}
    </div>
  );
};
