import React from 'react';
import "./BorderTemplate.css";

function BorderTemplate() {
    return (
        <div id={"template"}>
            <div id={"header"}></div>
            <div id={"sidebarLeft"}></div>
            <div id={"middle"}></div>
            <div id={"sidebarRight"}></div>
            <div id={"footer"}></div>
        </div>
    );
}

export default BorderTemplate;