import React from 'react';
import './custom-button.scss';

const CustomButton = ({children,inGoogleSignIn,...otherProps}) => {
    return ( 
        <button className={`${inGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherProps}>
            {children}
        </button>
     );
}
 
export default CustomButton;