import React from 'react';
import Buttons from './Buttons';
import Screen from './Screen';

const Wrapper = ({buttons, handleClick, tempScreen, result}) => {
    return (
        <div className="wrapper">
            <h1>Calculator</h1>
            <Screen tempScreen={tempScreen} result={result} />
            <div className="buttons">
                {
                buttons.map(element => <Buttons button={element.obj[0]} key={element.obj[0]} id={element.obj[1]} handleClick={handleClick}/>)
            }
            
            </div>
            <div className="copyright"><h2>Made for FreeCodeCamp for the Front End Libraries section by <a href="https://github.com/AnthoVDO" target="_blank" rel="noreferrer" className="copyright__name">AnthonVDO</a></h2></div>
        </div>
    );
};

export default Wrapper;