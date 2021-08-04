import React, {useState} from "react";
import {RatingTypes} from "../Rating/Rating";

type UncontrolledRatingPropsType = {
    defaultRating?: RatingTypes
    onChange: (value: RatingTypes) => void
}


export function UncontrolledRating(props: UncontrolledRatingPropsType) {

    let [value, setValue] = useState<RatingTypes>(props.defaultRating ? props.defaultRating : 0)

    console.log('Rating rendering')

    let selectedStar1 = () => setValue(1);
    props.onChange(1)
    let selectedStar2 = () => setValue(2);
    props.onChange(2)
    let selectedStar3 = () => setValue(3);
    props.onChange(3)
    let selectedStar4 = () => setValue(4);
    props.onChange(4)
    let selectedStar5 = () => setValue(5);
    props.onChange(5)

    return (
        <div>
            <Star setValue={selectedStar1} selected={value > 0}/>
            <Star setValue={selectedStar2} selected={value > 1}/>
            <Star setValue={selectedStar3} selected={value > 2}/>
            <Star setValue={selectedStar4} selected={value > 3}/>
            <Star setValue={selectedStar5} selected={value > 4}/>

        </div>)
}


type StarPropTypes = {
    selected: boolean
    setValue: () => void
}


export function Star(props: StarPropTypes) {
    console.log('Star rendering')

    const boldStar = () => props.setValue()

    return props.selected
        ? <span onClick={boldStar}><b>star </b></span>
        : <span onClick={boldStar}>star </span>

    /*return <span onClick={boldStar}>{props.selected ? <b>star </b> : 'star '}</span>*/

}


