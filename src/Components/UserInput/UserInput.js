import React from 'react';

const userinput = (props) => {
    
    const style = {
        border: "5px solid blue",
    };
    
    return (
        <input type="text"
            style={style} 
            onChange={props.changed} 
            value={props.currentName}
        />
    )
}

export default userinput;