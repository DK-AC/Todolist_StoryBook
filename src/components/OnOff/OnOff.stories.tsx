import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,
}

const callback = action('on or off clicked')

export const OnMode = React.memo(() => <OnOff on={true} onChange={callback}/>)
export const OffMode = React.memo(() => <OnOff on={false} onChange={callback}/>)

export const ModeChange = React.memo(() => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue}/>
})

