import React from 'react';
import Buttons from './Buttons';
import Screen from './Screen';

const Wrapper = ({buttons, handleClick, tempScreen, result}) => {
    return (
        <div className="wrapper">
            <h1>Calculator for FreeCodeCamp</h1>
            <Screen tempScreen={tempScreen} result={result} />
            <div className="buttons">
                {
                buttons.map(element => <Buttons button={element.obj[0]} key={element.obj[0]} id={element.obj[1]} handleClick={handleClick}/>)
            }
            </div>
            
        </div>
    );
};

export default Wrapper;