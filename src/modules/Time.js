import React, {Component} from "react";

class Timer extends Component {
    state = {
        date: new Date(),
        military: true
    };

    callMe(){
        setInterval(()=>{
            this.setState({date: new Date()});
        }, 1000);
    }

    is24hour(){
        return this.military;
    }

    render() {
        return(
            <div>
                <h1>{this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: this.is24hour()})}</h1>
                <h2>{this.state.date.toLocaleDateString()}</h2>
                {this.callMe()}
            </div>
        )
    }
}

export default Timer;