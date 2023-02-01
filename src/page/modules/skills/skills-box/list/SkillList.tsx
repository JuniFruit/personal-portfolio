import { FC, useCallback } from 'react';
import { useIntersect } from '../../../../../hooks/useIntersect';
import { getIntersectDefaultOpt } from '../../../../utils/general.utils';
import styles from './SkillList.module.scss';
import { skillList } from './skillsData';


const SkillList: FC = () => {

    const handleOnIntersect = useCallback((entry: IntersectionObserverEntry) => {

        const duration = .15;
        entry.target.childNodes.forEach((child, ind) => {
            (child as HTMLElement).classList.add(`animate-scaleIn`);
            (child as HTMLElement).style.animationDelay = `${ind * duration}s`;
            (child as HTMLElement).style.animationDuration = `${duration}s`;
            (child as HTMLElement).style.animationFillMode = `forwards`;
        })
    }, [])

    const { ref } = useIntersect({ options: getIntersectDefaultOpt(), onIntersect: handleOnIntersect })

    return (
        <div className={styles.wrapper}>
            <h2>My stack:</h2>
            <ul ref={ref}>
                {
                    skillList.map(skillItem => (
                        <li key={skillItem.title}>
                            {skillItem.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SkillList
