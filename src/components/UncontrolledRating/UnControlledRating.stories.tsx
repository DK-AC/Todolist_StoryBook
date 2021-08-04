import React, {useState} from 'react';
import {Star} from './UncontrolledRating';


export default {
    title: 'Star',
    component: Star,
}

export const EmptyStar = () =>
    <Star selected={false}
          setValue={() => {
          }}/>

export const BoldStar = () =>
    <Star selected={true}
          setValue={() => {
          }}/>

export const StarValue = () => {

    const [value, setValue] = useState<number>(0)

    return (<div>
            <Star setValue={() => setValue(1)}
                  selected={value > 0}/>
            <Star setValue={() => setValue(2)}
                  selected={value > 1}/>
            <Star setValue={() => setValue(3)}
                  selected={value > 2}/>
            <Star setValue={() => setValue(4)}
                  selected={value > 3}/>
            <Star setValue={() => setValue(5)}
                  selected={value > 4}/>
        </div>
    )
}