import React, {lazy, useEffect, useState} from 'react';
import shortid from 'shortid';
import './App.css';
import config from './config.js';
// import TemplateModule from './modules/TemplateModule/TemplateModule.js'
import templatemoduletwo from './modules/templatemoduletwo/templatemoduletwo.js'
import BasicTime from './modules/BasicTime/BasicTime.js';
import TimeModule from './modules/Time/Time.js';

let subredditsToShow = {}

function App() {


    importTemplate(config.template);

    const [views, setViews] = useState([]);

    useEffect(() => {
        async function loadViews() {
            const View = await importView("subreddit");
            let componentPromises = <View key={shortid.generate()} />;

            Promise.all([componentPromises]).then(setViews);
        }

        loadViews();
    }, []);

    return (
        <React.Suspense fallback='Loading views...'>
            <div className='container'>{views}</div>
        </React.Suspense>
        // buildModules(config)
        // test()
        // React.createElement('TemplateModule', null, null)
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



// async function test() {
//     let toReturn
//     await import("./modules/Time/Time.js").then (Time => {
//         toReturn = <Time key={"test"}/>;
//     })
//     return toReturn;
// }

// useEffect(() => {
//     effect
//     return () => {
//         cleanup
//     }
// }, [config])

const importView = module =>
    lazy(() =>
        import(`./modules/${module}/${module}.js`)
            .catch(() => 
                import(`./modules/Time/Time.js`)
            )
    );

export default App;
