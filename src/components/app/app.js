import React from 'react';
import './app.css';

import Main from '../main';
import Header from '../header';
import News from '../news';
import Education from '../education';

export default class App extends React.Component{

    state={
        current_page: <Main />, // main, news, education
        all_pages: [
            'Про нас', 
            'Навчання',
            'Новини',
            'Хеврон100',
            'Приєднатись',
            'Отримайте взамін від Хеврону'
        ],
        all_pages_ukr: [
            'Про нас', 
            'Навчання',
            'Новини',
            'Хеврон100',
            'Приєднатись',
            'Отримайте взамін від Хеврону'
        ],
        all_pages_eng:[
            'About',
            'Training',
            'Blog',
            'Hebron100',
            'Get involved',
            'Get in return from Hebron'
        ],
        current_language: 'укр' //ukr, eng
    }

    onLanguageSwitcherClicked = (newLanguage) =>{
        console.log(newLanguage);
        if(newLanguage === "eng"){
            this.setState({
                current_language: "eng",
                all_pages: this.state.all_pages_eng
            })
        }
        else if(newLanguage === "укр"){
            this.setState({
                current_language: "укр",
                all_pages: this.state.all_pages_ukr
            })
        }
    }

    onHeaderClicked = (item) =>{
        switch(item){
            case 'logo':
                console.log('Switched to main page');
                this.setState({
                    current_page: <Main />
                });
                break;
            case 'Новини':
                console.log('Switched to news page');
                this.setState({
                    current_page: <News />
                });
                break;
            case 'Навчання':
                console.log('Switched to education');
                this.setState({
                    current_page: <Education />
                });
                break;
            default:
                console.log(item, "wastn't switched");
        }
    }
    render(){
        const content = this.state.current_page;
        return (
        <div>
            <Header
            className="container bg"
            onClickNumberHappen= {this.onHeaderClicked}
            onClickLanguageSwitcher = {this.onLanguageSwitcherClicked}
            pages={this.state.all_pages}
            language={this.state.current_language}
            />
            <ul>
            {content}
            </ul>
        </div>);
    }
}