import React, {useState} from 'react';
import './App.css';
import {RatingTypes} from "./Components/Rating/Rating";
import {Accordion} from './Components/Accordion/Accordion';
import {OnOff} from './Components/OnOff/OnOff';
import {UncontrolledOnOff} from "./Components/UncontrolledOnOff/UncontrolledOnOff";


function App() {

    const [ratingValue, setRatingValue] = useState<RatingTypes>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [onOffValue, setOnOffValue] = useState<boolean>(true)


    console.log('App rendering')
    return (
        <div className={'content'}>
            {/*<PageTitle title={'This is App component'}/>
            <Rating value={3}/>

            <Accordion titleValue={'Users'} collapsed={false}/>
            <Rating value={0}/>*/}
            {/*<Rating  value={ratingValue} onClick={setRatingValue} />*/}
            {/*<OnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating/>*/}
            <OnOff on={onOffValue} setOnOffValue={() => {
                setOnOffValue(!onOffValue)
            }
            }/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed}
                       setAccordionCollapsed={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
            <UncontrolledOnOff  setOnOffValue={setOnOffValue}/>{onOffValue.toString()}


        </div>
    );
}


export default App;

