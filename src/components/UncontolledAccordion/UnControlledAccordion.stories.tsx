import React, {useState} from 'react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

export const UncontrolledAccordionMenu = () =>
    <UncontrolledAccordion
        titleValue={'Menu'}/>

export const UncontrolledAccordionUsers = () =>
    <UncontrolledAccordion
        titleValue={'Users'}/>

