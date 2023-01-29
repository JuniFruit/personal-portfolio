import { FC } from 'react'
import styles from './SkillList.module.scss';
import { skillList } from './skillsData';


const SkillList: FC = () => {
    return (
        <div className={styles.wrapper}>
            <h2>My stack:</h2>
            <ul>
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
