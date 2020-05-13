import React, {Component, lazy} from 'react';
import shortid from 'shortid';

class Tile extends Component {
    state = {
        contents: [],
        id: ""
    };

    componentDidMount() {
        if(this.props.children != null) {
            this.props.children.forEach((module) => {
                console.log(module);
                const Module = importModule(module.name);
                const element = <Module {...module.properties} key={shortid.generate()}/>;
                this.state.contents.push(element);
            });
        }
    }

    render() {
        return (
            <div key={shortid.generate()} id={this.state.id}>{this.state.contents}</div>
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

export default Tile;