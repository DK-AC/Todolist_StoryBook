import React, {useState} from "react";
import styles from './Select.module.css'

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

    const [active, setActive] = useState(false)
    const [hoverElement, setHoverElement] = useState(props.value)

    const selectedItem = props.items.find(f => f.value === props.value)
    const hoverItem = props.items.find(f => f.value === hoverElement)


    const showItems = () => setActive(!active)
    const onClick = (value: any) => {
        props.onChange(value);
        showItems();
    }


    return (
        <div>
            <div className={styles.select + ''}>
                <span
                    className={styles.main}
                    onClick={showItems}>
                    {selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            key={i.value}
                            className={styles.item + " " + (hoverItem === i ? styles.selected : '')}
                            onClick={() => onClick(i.value)}
                            onMouseEnter={() => setHoverElement(i.value)}
                        >{i.title}</div>)}
                    </div>}
            </div>
        </div>
    )
}