import { IProjectItem } from "../../../../../components/projects/item/ProjectItem.interface";


export interface IProjectItemData extends IProjectItem {
    link: string;
    preview: string;
}

export const projectList: IProjectItemData[] = [
    {
        title: 'Ultimate Chess',
        shortDescription: 'Full stack Multiplayer Chess Game featuring brand new Ultimate mode, where you can use magic spells',
        link: 'https://ultimate-chess.onrender.com/',
        gitHubLink: "https://github.com/JuniFruit/Ultimate-chess",
        preview: "https://drive.google.com/uc?export=download&id=1Q5ITYUYxYLOE0IvNxFqXbT9jGAQQZpjv",
    },
    {
        title: 'MeTube',
        shortDescription: 'Full stack broadcasting app, where you can watch, upload, like and comment videos, follow other channels',
        link: "https://me-tube.onrender.com/",
        gitHubLink: 'https://github.com/JuniFruit/Video-hosting',
        preview: 'https://drive.google.com/uc?export=download&id=15T3CB3a7GriN6B2ePW6S4VasAKLiNm8E'
    },
    {
        title: "Mini-Reddit",
        shortDescription: "A short replica of popular social platform. Main features, such as commenting, reacting to posts and follow subreddits, are present",
        link: "https://mini-reddit.onrender.com/",
        gitHubLink: "https://github.com/JuniFruit/mini-reddit",
        preview: "https://drive.google.com/uc?export=download&id=1bckopjZCRSUMMC4K2l4hHeA4uxCNM2Is"
    },
    {
        title: "Algorithm Visualizer",
        shortDescription: "Small website where you can check how different search algorithms work",
        link: "https://algorithm-visualizer.onrender.com/",
        gitHubLink: "https://github.com/JuniFruit/Algorithm-Visualizer",
        preview: "https://drive.google.com/uc?export=download&id=1e8cMWH60eTw4RRAm-KxiDaeufbmLQRlk"
    },
    {
        title: "Data Structures",
        shortDescription: "Small website where you can play around with common data structures",
        link: "https://junifruit.github.io/",
        gitHubLink: "https://github.com/JuniFruit/JuniFruit.github.io",
        preview: "https://drive.google.com/uc?export=download&id=1Z-bwJRQtFogyf6rAYvfDHIMHUiv8axut"
    },
    {
        title: "Personal Portfolio",
        shortDescription: "Website you're currently browsing. You can checkout GitHub repo",
        link: "https://jpersonal-portfolio-website.netlify.app/",
        gitHubLink: "https://github.com/JuniFruit/personal-portfolio",
        preview: "https://drive.google.com/uc?export=download&id=1w7p0nmeXjgZ8caSDvXi6E9l5CQ_VShyA"
    }
] 