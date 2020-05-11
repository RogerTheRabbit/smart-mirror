import React from 'react';
import './templates/borderTemplate.css';
import TemplateModule from './modules/Template/TemplateModule.js'
import BasicTime from './modules/BasicTime/BasicTime.js';
import TimeModule from './modules/Time/Time.js';

function App() {
    return (
        <div className={"container"}>
            <div className={"sidebarLeft"}>
                sidebarLeft
                <TemplateModule />
            </div>
            <div className={"header"}>
                header
                <br/><br/><br/>
                <BasicTime />
                <br/><br/><br/><br/>
                <TimeModule/>
                <TemplateModule />
            </div>
            <div className={"middle"}>
                middle
                <TemplateModule />
            </div>
            <div className={"sidebarRight"}>
                sidebarRight
                <TemplateModule />
            </div>
            <div className={"footer"}>
                footer
                <TemplateModule />
            </div>
        </div>
    );
}

export default App;
