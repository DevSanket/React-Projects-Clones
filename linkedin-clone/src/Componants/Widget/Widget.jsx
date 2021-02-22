import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';
import "./Widget.css";

const Widgets = () => {
    const newsArticle = (heading,subtitle) => {
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecord/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }
    return ( 
        <div className="widgets">
            <div className="widget_header">
                <h2>Linkdin News</h2>
                <Info/>
            </div>
        </div>
     );
}
 
export default Widgets;