import React from 'react';
import {UncontrolledRating} from './UncontrolledRating';
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,
}

const callback = action('Rating change inside component')

export const EmptyUncontrolledRating = React.memo( () =>
    <UncontrolledRating defaultRating={0}
                        onChange={callback}/>)
export const UncontrolledRating1 = React.memo( () =>
    <UncontrolledRating defaultRating={1}
                        onChange={callback}/>)
export const UncontrolledRating2 = React.memo( () =>
    <UncontrolledRating defaultRating={2}
                        onChange={callback}/>)
export const UncontrolledRating3 = React.memo( () =>
    <UncontrolledRating defaultRating={3}
                        onChange={callback}/>)
export const UncontrolledRating4 = React.memo( () =>
    <UncontrolledRating defaultRating={4}
                        onChange={callback}/>)
export const UncontrolledRating5 = React.memo( () =>
    <UncontrolledRating defaultRating={5}
                        onChange={callback}/>)


