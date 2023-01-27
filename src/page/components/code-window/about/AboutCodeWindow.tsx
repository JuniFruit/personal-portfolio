import { FC } from 'react'
import { CodeLine } from '../../../ui/code-box/CodeLine';
import { ConstEl } from '../../../ui/code-box/ConstEl';
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
                    <p>name: 'Artyom'</p>
                </CodeLine>
                <CodeLine lineNum={3}>
                    <ConstEl
                        varName='name'
                        valueColor='string'>
                        'Fruit'
                    </ConstEl>
                </CodeLine>
            </div>

        </div>
    )
}

export default AboutCodeWindow
