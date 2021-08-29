import React from 'react';
import './app.css';

import Main from '../main';
import Header from '../header';
import News from '../news';
import Education from '../education';

export default class App extends React.Component{

    state={
        current_page: <Main />, // main, news, education
        all_pages: ['Про нас', 'Навчання', 'Новини','Хеврон100','Приєднатись','Отримайте взамін від Хеврону',],
        current_language: 'ukr' //ukr, eng
    }

    getContent = (content)=>{
        let mas = [];
        for(let i = 0; i < 100;i++){
            mas.push(i);
        }
        return mas.map((item,index) => {
            return(
                <li
                key={index+1}>{item}{content}</li>);
        })
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
            className="container"
            onClickNumberHappen= {this.onHeaderClicked}
            pages={this.state.all_pages}
            />
            <ul>
            {this.getContent(content)}
            </ul>
        </div>);
    }
}