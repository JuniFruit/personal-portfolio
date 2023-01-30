import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { ILinkDataItem } from "../../right-elements/list/Links.interface";

export interface ILinkIconDataItem extends ILinkDataItem {
    icon: IconType
}

export const data: ILinkIconDataItem[] = [
    {
        title: "GitHub",
        href: "https://github.com/JuniFruit",
        icon: IoLogoGithub
    },
    {
        title: "LinkedIn",
        href: "#about",
        icon: IoLogoLinkedin
    },


]