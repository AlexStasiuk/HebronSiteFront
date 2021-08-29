import React from 'react';
import HeaderItem from '../header-item/header-item';
import LanguageSwitcher from '../language-switcher';
import LogoInHeader from '../logo-in-header';
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
        const classNames = "header-block sticky-top border-bottom ";
        const ulStyle = "d-flex justify-content-between flex-row flex-wrap container align-items-center";
        return (
            <div className={classNames}>
                
                <ul
                    className={ulStyle}>
                    <li key="logo" className="logo list-unstyled header-items">
                        <LogoInHeader onClick={() => this.props.onClickNumberHappen("logo")}/>
                    </li>
                    {this.getPages()}
                    <li key="language-switcher" className="list-unstyled header-items">
                        <LanguageSwitcher 
                        onClick={(newLanguage) => this.props.onClickLanguageSwitcher(newLanguage)}
                        language={this.props.language}
                        />
                    </li>
                    <li key="support-button-in-header" className="d-flex logo list-unstyled header-items align-items-center">
                        <button className="board d-flex justify-content-center align-items-center w-50 support-button-in-header">Підтримати</button>
                    </li>
                </ul>
            </div>
        );
    }
}