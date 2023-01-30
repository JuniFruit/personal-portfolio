import { FieldError } from "react-hook-form";
import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';


export interface IFieldProps {
    error?: FieldError
}

type InputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends InputPropsField {
    fieldTitle?: string
}


type TextAreaPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> & IFieldProps

export interface ITextArea extends TextAreaPropsField {
    fieldTitle?: string
}