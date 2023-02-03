
import { ButtonHTMLAttributes } from 'react';
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> { }

export interface IButtonRefer extends IButton {
    isLoading: boolean;
}