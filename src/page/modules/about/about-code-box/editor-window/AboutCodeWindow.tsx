import { FC } from 'react'
import { CodeLine } from '../../../../ui/code-box/CodeLine';
import { ConstEl } from '../../../../ui/code-box/ConstEl';
import FuncEl from '../../../../ui/code-box/FuncEl';

import styles from './AboutCodeWindow.module.scss';

const AboutCodeWindow: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <CodeLine lineNum={1}>
                    <ConstEl
                        varName='user'
                        valueColor='default'>
                        {'{'}
                    </ConstEl>
                </CodeLine>
                <CodeLine lineNum={2}>
                    <p></p>
                </CodeLine>
                <CodeLine lineNum={3}>
                    <p>name: <span className={styles.string}>'Artyom'</span>,</p>
                </CodeLine>
                <CodeLine lineNum={4}>
                    <p>age: <span className={styles.num}>25</span>,</p>
                </CodeLine>
                <CodeLine lineNum={5}>
                    <p>location: <span className={styles.string}>'Istanbul, Turkey'</span>,</p>
                </CodeLine>
                <CodeLine lineNum={6}>
                    <p>hobbies: <span className={styles.string}>'Guitar, Videos, Video Games'</span>,</p>
                </CodeLine>
                <CodeLine lineNum={7}>
                    <p>passion: <span className={styles.string}>'Programming / Creating things'</span>,</p>
                </CodeLine>
                <CodeLine lineNum={8}>
                    <p>hasHigherEducation: <span className={styles.keyword}>true</span></p>
                </CodeLine>
                <CodeLine lineNum={9}>
                    <p></p>
                </CodeLine>
                <CodeLine lineNum={10}>
                    <p>
                        {'}'}
                    </p>
                </CodeLine>
                <CodeLine lineNum={11}></CodeLine>
                <CodeLine lineNum={12}></CodeLine>
                <CodeLine lineNum={13}></CodeLine>

            </div >
            <CodeLine lineNum={14}>
                <FuncEl
                    funcName='compile'
                    arg='user'
                />
            </CodeLine>

        </div >
    )
}

export default AboutCodeWindow
