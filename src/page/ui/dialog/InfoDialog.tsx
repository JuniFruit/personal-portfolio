import { Dialog } from '@headlessui/react';
import { FC } from 'react';
import { Dontshow } from '../../components/checkbox/Dontshow';
import { DialogBtn } from '../buttons/button/DialogBtn';
import { IInfoDialog } from './Dialog.interface';
import styles from './Dialog.module.scss';


const InfoDialog: FC<IInfoDialog> = ({ onClose, message, isOpen }) => {

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            className={styles.container}
        >
            <div className={styles.wrapper}>
                <Dialog.Panel className={styles.panel_wrapper}>
                    <Dialog.Title className={styles.panel_title}>INFO</Dialog.Title>
                    <Dialog.Description className={styles.panel_msg}>
                        {message}
                    </Dialog.Description>
                    <Dontshow />
                    <div className={styles.panel_buttons}>
                        <DialogBtn
                            onClick={() => { onClose() }}
                            aria-label="Close the popup"
                        >
                            Got it
                        </DialogBtn>
                    </div>

                </Dialog.Panel>
            </div>
        </Dialog>
    )
}

export default InfoDialog;