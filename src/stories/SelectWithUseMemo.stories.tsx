import React, {useMemo, useState} from "react";
import {ItemType, Select} from "../Components/Select/Select";

export default {
    title: 'Select With UseMemo',
    component: Select,
}

export const SelectWithUseMemo = () => {
    console.log('SelectWithUseMemo')
    const [value, setValue] = useState<ItemType[]>([
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ])
    const newItem = useMemo(() => {
        const newItemCity = value.filter(i => i.title.toLowerCase().indexOf('m') > -1)
        return newItemCity
    }, [])


    return (
        <div>
            <Select
                value={value}
                onChange={setValue}
                items={newItem}
            />
        </div>
    )
}
