import { InputHTMLAttributes } from 'react';

export interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
    fieldTitle: string;
}