import React from 'react';
import './App.css';
import config from './config.js';
import TemplateModule from './modules/TemplateModule/TemplateModule.js'
import templatemoduletwo from './modules/templatemoduletwo/templatemoduletwo.js'
import BasicTime from './modules/BasicTime/BasicTime.js';
import TimeModule from './modules/Time/Time.js';

function App() {
    importTemplate(config.template);

    // Object.keys(config.areas).forEach(key) {
    //     importModule()
    // }

    console.log(buildModules(config));

    return (
        // buildModules(config)
        React.createElement('templatemoduletwo', null, null)
        // <div className={"container"}>
        //     <div className={"sidebarLeft"}>
        //         sidebarLeft
        //         <TemplateModule />
        //     </div>
        //     <div className={"header"}>
        //         header
        //         <br/><br/><br/>
        //         <BasicTime />
        //         <br/><br/><br/><br/>
        //         <TimeModule/>
        //         <TemplateModule />
        //     </div>
        //     <div className={"middle"}>
        //         middle
        //         <TemplateModule />
        //     </div>
        //     <div className={"sidebarRight"}>
        //         sidebarRight
        //         <TemplateModule />
        //     </div>
        //     <div className={"footer"}>
        //         footer
        //         <TemplateModule />
        //     </div>
        // </div>
    );
}

async function importTemplate(template) {
    try {
        await import(`./templates/${template}`);
    } catch (error) {
        console.error("Failed to load template:", error);
    }
}

async function importModule(module) {
    try {
        let ccc = await import(`./modules/${module}/${module}.js`);
        console.log("HERERERE", ccc);
    } catch (error) {
        console.error("Failed to load module:", error);
    }
}

function buildModules(config) {
    let curModule;

    // let test = `<div className="container">`
    let children = [];

    for(let idx = 0; idx<config.modules.length; idx++) {
        curModule = config.modules[idx];
        importModule(curModule.name);
        // TODO: Replace null with children: https://reactjs.org/docs/react-without-jsx.html
        
        // const m = require(`./modules/${curModule.name}/${curModule.name}.js`).default;
        children.push(document.createElement('div', null, null));

        // test += `<${curModule.name} className="${curModule.position}" properties="${curModule.properties}" />`
    }

    // test += "</div>"

    return React.createElement("div", {className: "container"}, children);
}

export default App;
