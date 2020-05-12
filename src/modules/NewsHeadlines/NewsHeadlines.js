import React, {Component} from "react";


class NewsHeadlines extends Component{

    state = {
        currentHeadline: "",
        numHeadlines: 0,
    };

    requestHeadlines(){
        const apiKey = "36e2461c740f44efb7e833af3f36872d";
        //let Http = new XMLHttpRequest();
        const url = 'http://newsapi.org/v2/top-headlines?' +
                    'country=us&' +
                    'apiKey=' + apiKey;
        // Http.open('GET', url, true);
        // Http.send();
        //let obj = this;

        let req = new Request(url);
        fetch(req)
            .then(function(response) {
                console.log(response.json());
            });

        // Http.onreadystatechange = function (){
        //     if(this.readyState === 4 && this.status === 200){
        //         let response = JSON.parse(Http.responseText);
        //         obj.setState( {currentHeadline: response.articles[0].title});
        //         console.log(obj.currentHeadline);
        //     }
        // };
    }


    callMe(){
        setInterval(()=>{
            //this.requestHeadlines();
        }, 3600 * 1000);
    }


    componentDidMount() {
        //this.requestHeadlines();
        //this.callMe();
    }

    render() {
        return(
            <div>
                <p>{this.state.currentHeadline}</p>
            </div>
        );
    }
}

export default NewsHeadlines;