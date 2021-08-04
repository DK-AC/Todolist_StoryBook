import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('Accordion mode change clicked')

export const CollapsedMode = () =>
    <Accordion
        collapsed={true}
        titleValue={'Hello'}
        setAccordionCollapsed={callback}
    />
export const UnCollapsedMode = () =>
    <Accordion
        collapsed={false}
        titleValue={'GoodBye'}
        setAccordionCollapsed={callback}
    />

export const ModeChange = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Menu'}
                      collapsed={value}
                      setAccordionCollapsed={() => setValue(!value)}
    />
}

