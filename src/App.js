import React from 'react';
import './App.css';
import config from './config.js';
import TemplateModule from './modules/Template/TemplateModule.js'
import BasicTime from './modules/BasicTime/BasicTime.js';
import Time from './modules/Time/Time.js';
import RandomFact from "./modules/RandomFact/RandomFact";

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
                <Time/>

            </div>
            <div className={"middle"}>
                middle
                <RandomFact />
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
