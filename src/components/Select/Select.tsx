import React from "react";

type ItemType = {
    title: string
    value: any
}

export type SelectPropTypes = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]

}


export const Select = (props: SelectPropTypes) => {

    const selectedItem = props.items.find(f => f.value === props.value)

    return (
        <div>
            <select>
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
            </select>
            <h3>{selectedItem && selectedItem.title}</h3>
            {props.items.map(i => <div key={i.value}>{i.title}</div>)}
        </div>
    )
}