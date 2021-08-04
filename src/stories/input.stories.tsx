import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input',
}

export const UncontrolledInput = () => <input/>

export const ControlledInput = () => {
    const [value, setValue] = useState<string>('')

    const inputValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    return <>
        <input value={value}
               onChange={inputValueHandler}
        />-{value}</>
}

export const UncontrolledInputValue = () => <input value={'DK-Auto-Chess'}/>

export const ControlledInputByButtonPress = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <div>
            <input
                id={'inputId'}
                ref={inputRef}
            />
            <button
                onClick={save}
            >save
            </button>
            -{value}
        </div>
    )
}