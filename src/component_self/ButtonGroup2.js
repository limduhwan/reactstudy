import React from "react";
import styled from 'styled-components';

const S = {};

S.Wrapper = styled.div`
    padding: 32px 36px;
    width: 400px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`;

S.ButtonStyle = styled.div`
    height: 48px;
    width: 204px;
    line-height: 48px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    font-family: 'Avenir Heavy', sans-serif;
    font-size: 16px;
  
    & > * + * {
    margin-left: 8px;
    }
    
  :hover {
    background-color: rgba(0, 0, 0, 0.04);
  };
  :active {
    background-color: rgba(0, 0, 0, 0.12);
  };
`;



function ButtonGroup2 ({buttons, buttonOnClick})  {
    const buttonList =  buttons.map( ({button, index}) => {
        return <button
            key={index}
            onClick={buttonOnClick}
        >{button}</button>

    })

    return (
        <S.Wrapper>
            {console.log('==== '+buttons[0].title)}
            <S.ButtonStyle>
                {buttonList}
            </S.ButtonStyle>
        </S.Wrapper>
    );
}

export default ButtonGroup2;
