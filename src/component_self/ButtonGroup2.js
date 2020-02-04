import React from "react";

function ButtonGroup2 ({buttons, buttonOnClick})  {
    const buttonList =  buttons.map( ({button, index}) => {
        return <button key={index} onClick={buttonOnClick}>{button}</button>
    })

    return (
        <div>
            {console.log('==== '+buttons[0].title)}
            {buttonList}
        </div>
    );
}

export default ButtonGroup2;
