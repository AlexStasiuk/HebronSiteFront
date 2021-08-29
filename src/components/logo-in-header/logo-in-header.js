import React from 'react';

import './logo-in-header.css';
export default class LogoInHeader extends React.Component{
    render(){
        return(
        <div className="logo-main">
            <div className="two-squares">
                <div className="square"></div>
                <div className="square"></div>
            </div>
            <div className="hebron-logo">
                <span
                onClick={this.props.onClick}>HEBRON</span>
            </div>
            <div className="logo-text">
                <span>Education charity</span>
                <span>Organization</span>
            </div>
        </div>);
    }
}