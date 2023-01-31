import { FC } from 'react';
import { useClickOutside } from '../../../../../hooks/useClickOutside';
import Hamburger from '../../../../ui/buttons/button/Hamburger';
import Dropdown from './dropdown/Dropdown';


const MobileNav: FC = () => {

    const { ref, isShow, setIsShow } = useClickOutside(false)

    return (
        <div ref={ref}>
            <Hamburger
                onClick={() => setIsShow(!isShow)}
                isActive={isShow}
            />
            {
                isShow
                    ?
                    <Dropdown

                        onItemClick={() => setIsShow(false)}
                    />
                    : null
            }
        </div>
    )
}

export default MobileNav
