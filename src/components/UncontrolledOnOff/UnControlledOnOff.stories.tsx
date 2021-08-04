import React, {useState} from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

export const UncontrolledOn = () =>
    <UncontrolledOnOff  setOnOffValue={() => {
    }}/>

export const UncontrolledOff = () =>
    <UncontrolledOnOff setOnOffValue={()=>{}
    }/>

export const ControlledValued = () => {

    const [value, setValue] = useState<boolean>(true)

    return (<div>
            <UncontrolledOnOff setOnOffValue={()=>setValue(!value)}/>
        </div>
    )
}