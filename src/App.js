import React from 'react';
import './App.css';
import config from './config.js';
import TemplateModule from './modules/Template/TemplateModule.js'
import BasicTime from './modules/BasicTime/BasicTime.js';
import TimeModule from './modules/Time/Time.js';

function App() {
    console.log(config);
    importTemplate(config.template);
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

async function importTemplate(template) {
    try {
        await import(`./templates/${template}`);
    } catch (error) {
        console.error("Failed to load template:", error);
    }
}

export default App;
