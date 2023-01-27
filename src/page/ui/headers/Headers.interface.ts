import { LabelHTMLAttributes } from 'react'


export interface IHeading extends LabelHTMLAttributes<HTMLHeadingElement> { }


export interface ISectionSubHeading extends IHeading {
    textMain: string;
    textAccent: string;
    accentColor: 'main' | 'complimentary' | "additional" | "secondary"
}