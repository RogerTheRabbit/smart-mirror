
import React, {Component} from 'react';

class RandomFact extends Component{

    state = {
        fact: ""
    };

    requestFact(){
        let Http = new XMLHttpRequest();
        const url = 'https://uselessfacts.jsph.pl/random.json?language=en';
        Http.open('GET', url, true);
        Http.send();

        Http.onreadystatechange = function (){
            if(this.readyState === 4 && this.status === 200){
                let response = JSON.parse(Http.responseText);
                this.fact = response.text;
                console.log(this.fact);
            }
        };
    }

    render(){
        return (
            <div>
                {this.requestFact()}
                <p>{this.state.fact}</p>
            </div>
        );
    }
}

export default RandomFact;