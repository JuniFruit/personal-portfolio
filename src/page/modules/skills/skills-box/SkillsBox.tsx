import { FC } from 'react'
import Box from '../../../components/flex-box/Box';
import RotatedCardList from '../../../components/rotated-card-list/RotatedCardList';
import SkillList from './list/SkillList';
import styles from './SkillsBox.module.scss';
import { cardList } from './cards/cardsData';

const SkillsBox: FC = () => {
    return (
        <Box>
            <SkillList />

            <RotatedCardList
                items={cardList}
            />

        </Box>
    )
}

export default SkillsBox
