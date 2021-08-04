import React, {useState} from "react";


export function UncontrolledRating() {

    let [value, setValue] = useState(0)

    console.log('Rating rendering')

    let selectedStar1 = () => setValue(1)
    let selectedStar2 = () => setValue(2)
    let selectedStar3 = () => setValue(3)
    let selectedStar4 = () => setValue(4)
    let selectedStar5 = () => setValue(5)

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


