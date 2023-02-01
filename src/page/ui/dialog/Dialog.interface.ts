
export interface IDialog {
    onClose: () => void;
    isOpen: boolean;

}

export interface IInfoDialog extends IDialog {
    message: string;
}