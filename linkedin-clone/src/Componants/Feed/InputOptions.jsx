import React from 'react';
import './InputOptions.css';

const InputOpitions = ({Icon,title,color}) => {
    return ( <div className="inputOption">
                <Icon style={{color:color}} />
                <p>{title}</p>
    </div> );
}
 
export default InputOpitions;