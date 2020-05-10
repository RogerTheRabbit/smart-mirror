import React from 'react';
import './templates/borderTemplate.css';
import './modules/TemplateModule.js'
import TimeModule from './modules/Time.js';

function App() {
  return (
    <div className={"container"}>
        <div className={"header"}>
            <TimeModule />
        </div>
        <div className={"sidebarLeft"}>
            <TimeModule />
        </div>
        <div className={"middle"}>
            <TimeModule />
        </div>
        <div className={"sidebarRight"}>
            <TimeModule />
        </div>
        <div className={"footer"}>
            <TimeModule />
        </div>
    </div>
  );
}

export default App;
