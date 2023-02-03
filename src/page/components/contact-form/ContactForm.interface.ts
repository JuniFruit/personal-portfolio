

export interface IContactForm {
    onSubmitForm: (data: IContactFields, form: HTMLFormElement) => void;
    isLoading: boolean
}

export interface IContactFields {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}