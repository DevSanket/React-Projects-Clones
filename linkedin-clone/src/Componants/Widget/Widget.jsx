import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';
import "./Widget.css";

const Widgets = () => {
    const newsArticle = (heading,subtitle) => {
        return (
            <div className="widgets_article">
            <div className="widgets_articleLeft">
                
            </div>
            <div className="widgets_articleRight">
                <h4><FiberManualRecord className="icon"/> {heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
     )
    }
    return ( 
        <div className="widgets">
            <div className="widget_header">
                <h2>Linkdin News</h2>
                <Info/>
            </div>
            {newsArticle("Coronavirus: Lagos updates", "Tops news - 324 readers")}
      {newsArticle("Bitcoin hits new high", "Tops news - 2,324 readers")}
        </div>
     );
}
 
export default Widgets;