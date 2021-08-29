import React from 'react';

import './header-item.css'

export default class HeaderItem extends React.Component{
    render(){

        const classNames = "d-flex justify-content-center align-items-center w-100 h-100"
        return(<div
        onClick={this.props.onClick}
        className={classNames}
        >{this.props.value}</div>);
    }
}