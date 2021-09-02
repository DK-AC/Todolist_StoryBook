import React from "react";

export type OnOffPropTypes = {
    on: boolean
    onChange: (on: boolean) => void
}


export const OnOff = React.memo((props: OnOffPropTypes) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: '1px solid black',
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red',
    }

    const onStyleHandler = () => props.onChange(true)
    const offStyleHandler = () => props.onChange(false)


    return (
        <div>
            <div style={onStyle}
                 onClick={onStyleHandler}>
                On
            </div>
            <div style={offStyle}
                 onClick={offStyleHandler}>
                Off
            </div>
            <div style={indicatorStyle}/>
        </div>

    )

})