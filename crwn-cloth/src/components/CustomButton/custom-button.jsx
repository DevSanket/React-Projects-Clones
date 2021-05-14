import React from 'react';
import './custom-button.scss';

const CustomButton = ({children,inGoogleSignIn,inverted,...otherProps}) => {
    return ( 
        <button className={`${inverted ? 'inverted':''} ${inGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherProps}>
            {children}
        </button>
     );
}
 
export default CustomButton;