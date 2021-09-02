import React, {useState} from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

const callback = action('on or off clicked')

export const UncontrolledOn = React.memo(() =>
    <UncontrolledOnOff defaultOn={true} setOnOffValue={callback}/>)

export const UncontrolledOff = React.memo(() =>
    <UncontrolledOnOff defaultOn={false} setOnOffValue={callback}/>)


export const ControlledValued = React.memo(() => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <UncontrolledOnOff setOnOffValue={() => setValue(!value)}/>
    )
})