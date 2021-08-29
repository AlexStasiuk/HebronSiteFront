import React from 'react';
import HeaderItem from '../header-item/header-item';
import './header.css';

export default class Header extends React.Component{

    getPages(){
        const {onClickNumberHappen} = this.props;
        return(
        this.props.pages.map((item) => {
            return (
            <li
            className="list-unstyled header-items"
            key={item}>
               <HeaderItem 
               value={item}
               onClick={() => onClickNumberHappen(item)}/>
            </li>);
        })
        );
    }
    render(){
        const classNames = "header-block sticky-top border-bottom";
        const ulStyle = "d-flex justify-content-around flex-row flex-wrap";
        return (
            <div className={classNames}>
                <ul
                    className={ulStyle}>
                    {this.getPages()}
                </ul>
            </div>
        );
    }
}