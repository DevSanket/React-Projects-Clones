import React from 'react';
import './Contact.scss';
import pratik from '../../assets/pratik.png';
import abhishekh from '../../assets/abhishekh.png';
import nilesh from '../../assets/nilesh.png';
import yash from '../../assets/yash.png';


const Contact = () => {
    return ( <div className="contact">
        <div className="team-section">
            <h1>Our Team</h1>
            <span className="border"></span>
            <div className="ps">
                <a href="#">
                    <img src={pratik} alt="" />
                </a>
                <a href="#">
                    <img src={yash} alt="" />
                </a>
                <a href="#">
                    <img src={abhishekh} alt="" />
                </a>
                <a href="#">
                    <img src={nilesh} alt="" />
                </a>

            </div>
        </div>
    </div> );
}
 
export default Contact;