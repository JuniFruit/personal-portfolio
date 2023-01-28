import { FC } from 'react'
import TerminalOutput from '../../../../ui/code-box/terminal/TerminalOutput'
import { breakText } from '../../../../utils/format.utils'

import { data } from './text.data'

const TerminalAbout: FC = () => {
    return (
        <TerminalOutput
            fileName='About'
        >
            {breakText(data.text).map((line, ind) => (
                <p key={ind}>
                    {line}
                </p>
            ))}
        </TerminalOutput>
    )
}

export default TerminalAbout
