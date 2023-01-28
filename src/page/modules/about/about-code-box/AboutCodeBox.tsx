import { FC } from 'react'
import EditorWindow from '../../../components/code-box/editor-field/EditorWindow'
import CodeBoxHeader from '../../../components/code-box/header/CodeBoxHeader'
import LeftPanel from '../../../components/code-box/left-panel/LeftPanel'
import TerminalWindow from '../../../components/code-box/terminal/TerminalWindow'
import AboutCodeWindow from './editor-window/AboutCodeWindow'
import TerminalAbout from './terminal-window/TerminalAbout'
import styles from './AboutCodeBox.module.scss';
import AboutOutputWindow from './output-window/OutputWindow'

const AboutCodeBox: FC = () => {
    return (
        <div className={styles.box_wrapper}>
            <CodeBoxHeader title='About' />
            <LeftPanel />
            <EditorWindow tabTitle='About'>
                <AboutCodeWindow />
            </EditorWindow>
            <TerminalWindow>
                <TerminalAbout />
            </TerminalWindow>
            <AboutOutputWindow />
        </div>
    )
}

export default AboutCodeBox
