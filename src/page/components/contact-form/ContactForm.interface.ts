

export interface IContactForm {
    onSubmitForm: (data: IContactFields) => void;
}

export interface IContactFields {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}