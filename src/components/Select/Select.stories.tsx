import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
}

export const WithValue = React.memo(() => {
    const [value, setValue] = useState('2')

    return (
        <div>
            <Select
                value={value}
                onChange={setValue}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'},
                ]}/>
        </div>
    )
})

export const WithoutValue = React.memo(() => {
    const [value, setValue] = useState(null)

    return (
        <div>
            <Select
                value={value}
                onChange={setValue}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'},
                ]}/>
        </div>
    )
})



