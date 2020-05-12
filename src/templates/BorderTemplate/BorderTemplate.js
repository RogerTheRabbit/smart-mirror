import React, {Component} from 'react';
import "./BorderTemplate.css";

class BorderTemplate extends Component {
    render() {
        return (
            <div id={"container"}>
                <div id={"header"}>Header</div>
                <div id={"sidebarLeft"}>Sidebar Left</div>
                <div id={"middle"}>Middle</div>
                <div id={"sidebarRight"}>Sidebar Right</div>
                <div id={"footer"}>Footer</div>
            </div>
        );
    }
}

export default BorderTemplate;