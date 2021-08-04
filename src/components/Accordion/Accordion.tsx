import React from "react";

export type AccordionPropTypes = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: () => void

}


export function Accordion(props: AccordionPropTypes) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle
                setAccordionCollapsed={props.setAccordionCollapsed}
                title={props.titleValue}
            />
            {
                !props.collapsed && <AccordionBody/>
            }
        </div>
    )
}

type AccordionTitlePropTypes = {
    title: string
    setAccordionCollapsed: () => void
}


function AccordionTitle(props: AccordionTitlePropTypes) {

    const accordionChangeHandler=()=>props.setAccordionCollapsed()

    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={accordionChangeHandler}> --{props.title}-- </h3>
    )
}

function AccordionBody() {
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
}


