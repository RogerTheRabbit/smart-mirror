import React, {lazy, useEffect, useState} from 'react';
import './App.css';
import config from './gridConfig.js';

function App() {

    const [template, setTemplate] = useState([]);

    useEffect(() => {
        console.log("Template changed");
        const Template = importTemplate(config.template.name);
        setTemplate(<Template {...config.template.properties}>{config.modules}</Template>);
    }, [])

    function importTemplate(template) {
        return lazy(() =>
            import(`./templates/${template}/${template}.js`)
                .catch((error) => 
                    // TODO: Import default template or something.
                    console.error("Template failed to load", error)
                )
        );
    }
    return (
        <React.Suspense fallback='Loading Modules...'>
            {template}
        </React.Suspense>
    );
}

export default App;
