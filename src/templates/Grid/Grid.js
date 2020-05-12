import React, {Component, lazy} from 'react';
import "./Grid.css";
import shortid from 'shortid';

class Grid extends Component {
    state = {
        rows: 3,
        cols: 3,
        contents: []
    };

    componentDidMount() {
        document.documentElement.style.setProperty("--rowNum", this.props.rows);
        document.documentElement.style.setProperty("--colNum", this.props.cols);

        let newState = this.state;

        newState.rows = this.props.rows;
        newState.cols = this.props.cols;

        this.props.children.forEach((module) => {
            console.log(module);
            const Module = importModule(module.name);
            const element = <Module {...module.properties} key={shortid.generate()}/>

            newState.contents.push(element);

        });
        this.setState(newState);
        console.log(this.state);
    }

    renderSquare(i) {
        return <div key={shortid.generate()} id={i}>{this.state.contents[i]}</div>;
    }

    createSquares() {
        let tiles = [];
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                tiles.push(this.renderSquare(3*i+j));
            }
        }
        return tiles;
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

function importModule(module) {
    return lazy(() =>
        import(`../../modules/${module}/${module}.js`)
            .catch(() =>
                import(`../../modules/NullModule.js`)
            )
    );
}

export default Grid;