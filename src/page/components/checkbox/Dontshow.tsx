import { FC, ChangeEventHandler } from 'react'
import { Checkbox } from '../../ui/checkbox/Checkbox'

export const Dontshow: FC = () => {

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e);
        window.localStorage.setItem("info_hidden", `${e.target.checked}`);
    }

    return (
        <Checkbox
            fieldTitle='Do not show again'
            onChange={handleOnChange}
        />
    )
}

