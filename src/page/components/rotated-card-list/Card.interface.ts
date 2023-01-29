import { IImage } from "../../ui/image/Image.interface";


export interface ICardItem {
    title: string;
    img: IImage;
}

export interface IRotatedCardList {
    items: ICardItem[]
}