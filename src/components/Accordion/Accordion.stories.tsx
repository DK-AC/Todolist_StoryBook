import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('Accordion mode change clicked')
const onClickCallback = action('Some item click')

export const CollapsedMode = () =>
    <Accordion
        items={[
            {title: 'Denis', value: 1},
            {title: 'Jenya', value: 2},
            {title: 'Sasha', value: 3},
            {title: 'Dima', value: 4},
        ]}
        onClick={onClickCallback}
        collapsed={true}
        titleValue={'Hello'}
        setAccordionCollapsed={callback}
    />

export const UnCollapsedMode = () =>
    <Accordion
        items={[
            {title: 'Denis', value: 1},
            {title: 'Jenya', value: 2},
            {title: 'Sasha', value: 3},
            {title: 'Dima', value: 4},
        ]}
        onClick={onClickCallback}
        collapsed={false}
        titleValue={'GoodBye'}
        setAccordionCollapsed={callback}
    />

export const ModeChange = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        items={[
            {title: 'Denis', value: 1},
            {title: 'Jenya', value: 2},
            {title: 'Sasha', value: 3},
            {title: 'Dima', value: 4},
        ]}
        onClick={onClickCallback}
        titleValue={'Menu'}
        collapsed={value}
        setAccordionCollapsed={() => setValue(!value)}
    />
}

