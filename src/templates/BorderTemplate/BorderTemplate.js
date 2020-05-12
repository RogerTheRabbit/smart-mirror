import React, {lazy, Component} from 'react';
import "./BorderTemplate.css";
import shortid from 'shortid';

class BorderTemplate extends Component {

    state = {
        header: [],
        sidebarLeft: [],
        middle: [],
        sidebarRight: [],
        footer: [],
    };

    componentDidMount() {

        let newState = this.state;

        this.props.children.forEach((module) => {
            console.log(module);
            const Module = importModule(module.name);
            const element = <Module {...module.properties} key={shortid.generate()}/>
    
            switch (module.position) {
                case "header":
                    newState.header.push(element);
                    break;
                case "sidebarLeft":
                    newState.sidebarLeft.push(element);
                    break;
                case "middle":
                    newState.middle.push(element);
                    break;
                case "sidebarRight":
                    newState.sidebarRight.push(element);
                    break;
                case "footer":
                    newState.footer.push(element);
                    break;
                default:
                    newState.header.push(element);
                    break;
            }
        });
        this.setState(newState);
        console.log(this.state);
    }



    render() {

        return (
            <div id={"container"}>
                <div id={"header"}>
                    {this.state.header}
                </div>
                <div id={"sidebarLeft"}>
                    {this.state.sidebarLeft}
                </div>
                <div id={"middle"}>
                    {this.state.middle}
                </div>
                <div id={"sidebarRight"}>
                    {this.state.sidebarRight}
                </div>
                <div id={"footer"}>
                    {this.state.footer}
                </div>
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

export default BorderTemplate;