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

export const ControlledInputValue = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <input value={value}
                   onChange={onChange}
            />
            -{value}
        </div>
    )
}

export const ControlledCheckBox = () => {
    const [value, setValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return (
        <div>
            <input type={'checkbox'}
                   checked={value}
                   onChange={onChange}
            />
        </div>
    )
}


export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>(undefined)

    /*const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }*/

    return (<div>
            <select value={value}>
                <option>none</option>
                <option value="1">Minsk</option>
                <option value="2">Moscow</option>
                <option value="3">Kiev</option>
            </select>
        </div>
    )
}
