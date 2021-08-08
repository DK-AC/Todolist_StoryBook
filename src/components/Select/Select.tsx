import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css'
import {log} from "util";

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


    useEffect(() => {
        setHoverElement(props.value)
    }, [props.value])

    const showItems = () => setActive(!active)
    const onClick = (value: any) => {
        props.onChange(value);
        showItems();
    }


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoverElement) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }


    return (
        <div>
            <div
                className={styles.select + ''}
                tabIndex={0}
                onKeyUp={onKeyUp}
            >
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