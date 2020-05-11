import React, {lazy, useEffect, useState} from 'react';
import shortid from 'shortid';
import './App.css';
import config from './config.js';

function App() {

    importTemplate(config.template);

    const [modules, setModules] = useState([]);

    useEffect(() => {
        async function loadModules() {
            const componentPromises  = config.modules.map(async module => {
                const Module = importModule(module.name);
                return <Module key={shortid.generate()}/>; 
            });

            Promise.all(componentPromises).then(setModules);
        }
        loadModules();
    }, []);

    return (
        <React.Suspense fallback='Loading Modules...'>
            <div className='container'>{modules}</div>
        </React.Suspense>
    );
}

async function importTemplate(template) {
    try {
        await import(`./templates/${template}`);
    } catch (error) {
        console.error("Failed to load template:", error);
    }
}

function importModule(module) {
    return lazy(() =>
        import(`./modules/${module}/${module}.js`)
            .catch(() => 
                import(`./modules/NullModule.js`)
            )
    );
}

export default App;
