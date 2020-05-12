
import React, {Component} from 'react';
import "./RandomFact.css";


class RandomFact extends Component{

    state = {
        fact: ""
    };

    requestFact(){
        let Http = new XMLHttpRequest();
        const url = 'https://uselessfacts.jsph.pl/random.json?language=en';
        Http.open('GET', url, true);
        Http.send();
        let obj = this;

        Http.onreadystatechange = function (){
            if(this.readyState === 4 && this.status === 200){
                let response = JSON.parse(Http.responseText);
                obj.setState( {fact: response.text});
            }
        };
    }

    callMe(){
        setInterval(()=>{
            this.requestFact();
        }, 3600 * 1000);
    }


    componentDidMount() {
        this.requestFact();
        this.callMe();
    }

    render(){
        return (
            <div>
                <p className={"fact"}>{this.state.fact}</p>
            </div>
        );
    }
}

export default RandomFact;