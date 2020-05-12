import React, {Component} from "react";


class NewsHeadlines extends Component{

    state = {
        currentHeadline: "",
        articles: [],
        numHeadlines: 0,
    };

    requestHeadlines(){
        const apiKey = "36e2461c740f44efb7e833af3f36872d";
        let Http = new XMLHttpRequest();
        const url = 'http://newsapi.org/v2/top-headlines?' +
                    'country=us&' +
                    'apiKey=' + apiKey;
        Http.open('GET', url, true);
        Http.send();
        let obj = this;


        Http.onreadystatechange = function (){
            if(this.readyState === 4 && this.status === 200){
                let response = JSON.parse(Http.responseText);
                let arr = response.articles;
                obj.setState( {currentHeadline: arr[2].title});
                console.log(obj.currentHeadline);
            }
        };
    }


    callMe(){
        setInterval(()=>{
            //this.requestHeadlines();
        }, 3600 * 1000);
    }


    componentDidMount() {
        this.requestHeadlines();
        //this.callMe();
    }

    render() {
        return(
            <div className={"headline"}>
                <p>{this.state.currentHeadline}</p>
            </div>
        );
    }
}

export default NewsHeadlines;