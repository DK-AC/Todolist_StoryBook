import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropTypes = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: () => void
    items: ItemType[]
    onClick: (value: string) => void

}


export const Accordion = React.memo((props: AccordionPropTypes) => {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle
                setAccordionCollapsed={props.setAccordionCollapsed}
                title={props.titleValue}
            />
            {
                !props.collapsed && <AccordionBody items={props.items}
                                                   onClick={x => x}/>
            }
        </div>
    )
})

type AccordionTitlePropTypes = {
    title: string
    setAccordionCollapsed: () => void
}


const AccordionTitle = React.memo((props: AccordionTitlePropTypes) => {

    const accordionChangeHandler = () => props.setAccordionCollapsed()

    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={accordionChangeHandler}> --{props.title}-- </h3>
    )
})

export type AccordionBodyPropTypes = {
    items: ItemType[]
    onClick: (value: string) => void

}

const AccordionBody = React.memo((props: AccordionBodyPropTypes) => {
    console.log('AccordionBody rendering')
    return (
        <div>
            <ul>
                {props.items.map((i, index) =>
                    <li key={index}
                        onClick={() => props.onClick(i.value)}
                    >{i.title}
                    </li>
                )}
            </ul>
        </div>
    )
})


