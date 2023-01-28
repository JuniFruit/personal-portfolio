import { images } from "../../../../../../assets/images/images";
import { IProjectItem } from "../../../../../components/projects/item/ProjectItem.interface";


export interface IProjectItemData extends IProjectItem {
    link: string;
    imgSrc: string;
}

export const projectList: IProjectItemData[] = [
    {
        title: 'Ultimate Chess',
        shortDescription: 'Full stack Multiplayer Chess Game featuring brand new Ultimate mode, where you can use magic spells',
        link: '',
        gitHubLink: "",
        imgSrc: "",
    },
    {
        title: 'MeTube',
        shortDescription: 'Full stack broadcasting app, where you can watch, upload, like and comment videos, follow other channels',
        link: "",
        gitHubLink: '',
        imgSrc: images.meTubePreview
    },
    {
        title: "Mini-Reddit",
        shortDescription: "A short replica of popular social platform. Main features, such as commenting, reacting to posts and follow subreddits, are present",
        link: "",
        gitHubLink: "",
        imgSrc: ""
    },
    {
        title: "Algorithm Visualizer",
        shortDescription: "Small website where you can check how different search algorithms work",
        link: "",
        gitHubLink: "",
        imgSrc: ""
    },
    {
        title: "Data Structures",
        shortDescription: "Small website where you can play around with common data structures",
        link: "",
        gitHubLink: "",
        imgSrc: ""
    },
    {
        title: "Personal Portfolio",
        shortDescription: "Website you're currently browsing. You can checkout GitHub repo",
        link: "",
        gitHubLink: "",
        imgSrc: ""
    }
] 