import React, {Component} from 'react';
import "./Grid.css";
import shortid from 'shortid';

class Grid extends Component {
    state = {
        rows: 3,
        cols: 3
    };

    componentDidMount() {
        this.setState({
            rows: this.props.rows,
            cols: this.props.cols
        });
        document.documentElement.style.setProperty("--rowNum", this.state.rows);
        document.documentElement.style.setProperty("--colNum", this.state.cols);
    }

    renderSquare(i) {
        return <div key={shortid.generate()} id={i}>{i}</div>;
    }

    createSquares() {
        let rows = [];
        for(let i = 0; i < 3; i++){
            let squares = [];
            for(let j = 0; j < 3; j++){
                squares.push(this.renderSquare(3*i+j));
            }
        rows.push(<div key={shortid.generate()}>{squares}</div>);
        }
        return rows;
    }

    render() {
        console.log(this.props)
        return (
            <div id="container">
                {this.createSquares()}
            </div>
        );
    }
}

export default Grid;