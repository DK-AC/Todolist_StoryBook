import React from "react";
import {useState} from "react";

type OnOffPropTypes = {
    setOnOffValue: (on: boolean) => void
}


export function UncontrolledOnOff(props: OnOffPropTypes) {
    console.log('OnOff rendering')

    let [on, setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: '1px solid black',
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',
    }

    const onClickOn = () => {
        setOn(true)
        props.setOnOffValue(true)
    }

    const offClickOff = () => {
        setOn(false)
        props.setOnOffValue(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClickOn}>On
            </div>
            <div style={offStyle} onClick={offClickOff}>Off
            </div>
            <div style={indicatorStyle}/>
        </div>

    )

}