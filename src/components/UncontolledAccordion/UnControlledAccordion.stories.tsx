import React from 'react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

export const UncontrolledAccordionMenu = React.memo(() => {
    return (
        <UncontrolledAccordion titleValue={'Menu'}/>)
})
