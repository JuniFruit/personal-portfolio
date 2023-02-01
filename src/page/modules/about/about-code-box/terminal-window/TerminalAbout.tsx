import { FC, useCallback } from 'react'
import { useIntersect } from '../../../../../hooks/useIntersect'
import TerminalOutput from '../../../../ui/code-box/terminal/TerminalOutput'
import { breakText } from '../../../../utils/format.utils'
import styles from './TerminalAbout.module.scss'
import { data } from './text.data'

const TerminalAbout: FC = () => {

    const handleOnIntersect = useCallback((entry: IntersectionObserverEntry) => {

        const duration = .15;
        entry.target.childNodes[0].childNodes.forEach((child, ind) => {
            (child as HTMLElement).classList.add(`animate-scaleIn`);
            (child as HTMLElement).style.animationDelay = `${ind * duration}s`;
            (child as HTMLElement).style.animationDuration = `${duration}s`;
            (child as HTMLElement).style.animationFillMode = `forwards`;
        })
    }, [])

    const { ref } = useIntersect({ options: { rootMargin: "0px 0px -250px 0px" }, onIntersect: handleOnIntersect })
    return (
        <div ref={ref} className={styles.wrapper}>
            <TerminalOutput
                fileName='About'
            >
                {breakText(data.text).map((line, ind) => (
                    <p key={ind}>
                        {line}
                    </p>
                ))}
            </TerminalOutput>
        </div>
    )
}

export default TerminalAbout
