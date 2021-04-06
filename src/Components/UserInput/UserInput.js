import React from 'react';

const userinput = (props) => {
    return (
        <input type="text" 
            onChange={props.changed} 
            value={props.currentName}
        />
    )
}

export default userinput;