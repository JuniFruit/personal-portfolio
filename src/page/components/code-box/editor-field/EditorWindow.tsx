import { FC, PropsWithChildren } from 'react'
import { TabActive } from '../../../ui/code-box/TabActive';
import { IEditorWindow } from './EditorWindow.interface';
import styles from './EditorWindow.module.scss';

const EditorWindow: FC<PropsWithChildren<IEditorWindow>> = ({ children, tabTitle }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.editor_header}>
                <TabActive title={tabTitle} />
                <span>index.html</span>
                <span>styles.css</span>
            </div>
            {children}
        </div>
    )
}

export default EditorWindow
