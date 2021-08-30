import React from 'react';

import './main.css';
import HebronTopImg from './HebronTop.png';

export default class Main extends React.Component{
    render(){
        const HebronTopImgStyle = "hebron-top-img";
        return(
        <div>
            <div className="first-block">
                <div>Hebron</div>
                <div className="image-div">
                    <img 
                        className={HebronTopImgStyle}
                        src={HebronTopImg}
                        alt="hebronTop" />
                    <h1 className="text-on-image">test</h1>
                </div>
                
            </div>
        </div>);
    }
}