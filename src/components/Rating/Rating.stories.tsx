import React, {useState} from 'react';
import {Rating, RatingTypes} from './Rating';


export default {
    title: 'Rating stories',
    component: Rating,
}

export const EmptyRating0 = React.memo(() => <Rating value={0} onClick={x => x}/>)
export const Rating1 = React.memo(() => <Rating value={1} onClick={x => x}/>)
export const Rating2 = React.memo(() => <Rating value={2} onClick={x => x}/>)
export const Rating3 = React.memo(() => <Rating value={3} onClick={x => x}/>)
export const Rating4 = React.memo(() => <Rating value={4} onClick={x => x}/>)
export const Rating5 = React.memo(() => <Rating value={5} onClick={x => x}/>)

export const RatingChange = React.memo(() => {
    const [rating, setRating] = useState<RatingTypes>(3)
    return <Rating value={rating} onClick={setRating}/>
})
