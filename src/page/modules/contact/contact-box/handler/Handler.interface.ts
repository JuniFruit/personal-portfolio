import { EmailJSResponseStatus } from '@emailjs/browser';

export interface IHandler {
    result: EmailJSResponseStatus | null;
}

export enum HandleMessages {
    OK = "Message successfully sent!",
    ERROR = "Failed!"
}