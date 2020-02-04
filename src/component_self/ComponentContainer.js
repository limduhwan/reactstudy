import React from 'react';
import ButtonGroup from './ButtonGroup';
import ButtonGroup2 from "./ButtonGroup2";

const ComponentContainer = ({handlerButtonGroup}) => {

    function handlerButtonGroup (value) {
        console.log('button ' + value);
    }

    return (
        <div> Test PopUp
            <ButtonGroup
                buttons={[{value: 1, content: 1, title: 1}, {value: 2, content: 2, title: 2}]}
                onChange={handlerButtonGroup} ></ButtonGroup>
            <ButtonGroup2
                buttons={[{value: 1, title: 11}, {value: 2, title: 22}, {value: 3, title: 33}]}/>
        </div>
    );
}

export default ComponentContainer;