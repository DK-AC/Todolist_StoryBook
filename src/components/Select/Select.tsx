import React from "react";

type ItemType = {
    title: string
    value: any
}

export type SelectPropTypes = {
    value: any
    items: ItemType[]
    onChange: (value: any) => void
    children?: React.ReactNode

}


export const ControlledSelect = (props: SelectPropTypes) => {


    return (
        <div>
            <div>{}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}