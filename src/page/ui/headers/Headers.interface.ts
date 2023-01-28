import { LabelHTMLAttributes } from 'react'
import { accentColor } from '../shared/Shared.type';


export interface IHeading extends LabelHTMLAttributes<HTMLHeadingElement> { }


export interface ISectionSubHeading extends IHeading {
    textMain: string;
    textAccent: string;
    accentColor: accentColor;
}
export interface ICodeHeading extends Omit<ISectionSubHeading, "textAccent" | "textMain"> {

}