import { FC } from 'react'
import AboutCodeWindow from '../code-window/about/AboutCodeWindow'
import EditorWindow from './editor-field/EditorWindow'
import CodeBoxHeader from './header/CodeBoxHeader'
import LeftPanel from './left-panel/LeftPanel'
import styles from './CodeBox.module.scss';

const CodeBox: FC = () => {
    return (
        <div className={styles.box_wrapper}>
            <CodeBoxHeader />
            <LeftPanel />
            <EditorWindow tabTitle='About'>
                <AboutCodeWindow />
            </EditorWindow>
        </div>
    )
}

export default CodeBox
