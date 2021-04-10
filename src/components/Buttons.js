import React from 'react';

const Buttons = ({button, handleClick, id}) => {
    return (
        <div className="buttons__button" >
        <button className="buttons__button__btn" onClick={handleClick} data-touche={button} id={id}>
            {button}
        </button>   
        </div>
    );
};

export default Buttons;