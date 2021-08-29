import React from 'react';

import './language-switcher.css'
export default class LanguageSwitcher extends React.Component{
    render(){
        let ukrLanguageStyle = "mr-1 ";
        let engLanguageStyle = "";
        if(this.props.language === "укр"){
            ukrLanguageStyle += "switched-language-color";
        }
        else if(this.props.language === "eng"){
            engLanguageStyle += "switched-language-color";
        }
        return(
            <div className="d-flex justify-content-center align-items-center w-100 h-100 lang-switcher">
                <span className={ukrLanguageStyle} onClick={()=>this.props.onClick("укр")}>укр</span>
                <span className={engLanguageStyle} onClick={()=>this.props.onClick("eng")}>eng</span>
            </div>
        );
    }
}