import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion = React.memo((props: UncontrolledAccordionPropsType) => {
    console.log('Accordion rendering')

    /* let [collapsed, setCollapsed] = useState(true)*/
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                debugger
                dispatch({type: TOGGLE_COLLAPSED})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
})

type AccordionTitlePropTypes = {
    title: string
    onClick: () => void
}


const AccordionTitle = React.memo((props: AccordionTitlePropTypes) => {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => props.onClick()}> --{props.title}-- </h3>
    )
})

const AccordionBody = React.memo(() => {
    console.log('AccordionBody rendering')
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
})


