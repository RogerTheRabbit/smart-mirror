import React, {Component} from 'react';
import "./Grid.css";

class Grid extends Component {
    state = {
        rows: 0,
        cols: 0
    };

    componentDidMount() {
        this.setState({rows: this.props.rows});
        this.state.cols = this.props.cols;
        document.documentElement.style.setProperty("--rowNum", this.state.rows);
        document.documentElement.style.setProperty("--colNum", this.state.cols);
    }

    renderSquare(i) {
        return <div id={i}></div>;
    }

    createSquares() {
        let rows = [];
        for(let i = 0; i < 3; i++){
            let squares = [];
            for(let j = 0; j < 3; j++){
                squares.push(this.renderSquare(3*i+j));
            }
            rows.push(<div>{squares}</div>);
        }
        return rows;
    }

    render() {
        return (
            <div>
                {this.createSquares()}
            </div>
        );
    }
}

export default Grid;