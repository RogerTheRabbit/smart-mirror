import React, {Component} from "react";
import './Time.css'

class Timer extends Component {
    state = {
        date: new Date(),
        military: true
    };

    callMe(){
        setInterval(()=>{
            this.setState({date: new Date()});
        }, 60000);
    }

    is24hour(){
        return this.military;
    }

    componentDidMount() {
        this.callMe();
    }

    render() {
        return(
            <div>
                <p className={"time"}>{this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: this.is24hour()})}</p>
                <p className={"date"}>{this.state.date.toLocaleDateString()}</p>
            </div>
        )
    }
}

export default Timer;
