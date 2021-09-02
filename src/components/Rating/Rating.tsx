import React from "react";

export type RatingTypes = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropTypes = {
    value: RatingTypes
    onClick: (value: RatingTypes) => void
}

export function Rating(props: RatingPropTypes) {
    console.log('Rating rendering')

    const clickStar = props.onClick

    return (
        <div>
            <Star selected={props.value > 0} onClick={clickStar} value={1}/>
            <Star selected={props.value > 1} onClick={clickStar} value={2}/>
            <Star selected={props.value > 2} onClick={clickStar} value={3}/>
            <Star selected={props.value > 3} onClick={clickStar} value={4}/>
            <Star selected={props.value > 4} onClick={clickStar} value={5}/>
        </div>)
}


type StarPropTypes = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    onClick: (value: RatingTypes) => void
}


function Star(props: StarPropTypes) {

    const starHandler = () => props.onClick(props.value)

    console.log('Star rendering')
    return <span
        onClick={starHandler}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}


