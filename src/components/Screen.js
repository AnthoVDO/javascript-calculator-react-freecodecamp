import React from 'react';

const Screen = ({tempScreen, result}) => {
    return (
        <div className="screen">

            <div className="tempScreen">
                {tempScreen}
            </div>
        
            <div className="result" id="display">
                {result}
            </div>
        </div>
        
    );
};

export default Screen;