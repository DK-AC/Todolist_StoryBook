import React from 'react';
import {UncontrolledRating} from './UncontrolledRating';
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,
}

const callback = action('Rating change inside component')

export const EmptyUncontrolledRating = () =>
    <UncontrolledRating defaultRating={0}
                        onChange={callback}/>
export const UncontrolledRating1 = () =>
    <UncontrolledRating defaultRating={1}
                        onChange={callback}/>
export const UncontrolledRating2 = () =>
    <UncontrolledRating defaultRating={2}
                        onChange={callback}/>
export const UncontrolledRating3 = () =>
    <UncontrolledRating defaultRating={3}
                        onChange={callback}/>
export const UncontrolledRating4 = () =>
    <UncontrolledRating defaultRating={4}
                        onChange={callback}/>
export const UncontrolledRating5 = () =>
    <UncontrolledRating defaultRating={5}
                        onChange={callback}/>


