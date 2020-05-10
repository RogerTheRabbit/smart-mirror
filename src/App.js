import React from 'react';
import './templates/borderTemplate.css';
import './modules/TemplateModule.js'
import TimeModule from './modules/Time.js';

function App() {
    return (
        <div className={"container"}>
            <div className={"sidebarLeft"}>
                sidebarLeft
                <TimeModule />
            </div>
            <div className={"header"}>
            header
                <TimeModule />
            </div>
            <div className={"middle"}>
                middle
                <TimeModule />
            </div>
            <div className={"sidebarRight"}>
                sidebarRight
                <TimeModule />
            </div>
            <div className={"footer"}>
                footer
                <TimeModule />
                <TimeModule />
            </div>
        </div>
    );
}

export default App;
