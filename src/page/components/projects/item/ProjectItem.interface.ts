import { HtmlHTMLAttributes } from "react";

export interface IProjectItem extends HtmlHTMLAttributes<HTMLDivElement> {
    title: string;
    shortDescription: string;
    gitHubLink: string
}