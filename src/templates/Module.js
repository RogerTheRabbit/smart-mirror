import React, {Component, lazy, Suspense} from 'react';
import shortid from 'shortid';

export default class ModuleRenderer extends Component {
    // buildModule(props) {
    //     const Module = lazy(() => {
    //         import(`../modules/${this.props.name}/${props.name}.js`)
    //             .catch(() => 
    //                 import(`../modules/NullModule.js`)
    //             )
    //     });
    //     console.log("TESTSTSTS:",Module);
    //     let toReturn = (<Module {...module.properties} key={shortid.generate()}/>);
    //     // console.log("MODULE:", toReturn);
    //     return toReturn;
    // }


    buildModule(props) {



        return <React.Suspense fallback='Loading views...'>
                    <div className='container'>{loadViews(props.name)}</div>
                </React.Suspense>

        // const Module = await importModule(props.name)
        // const promise = <Suspense>
        //                     <Module {...module.properties} key={shortid.generate()}/>
        //                 </Suspense>
        
        // let test;
        // Promise.all([promise])
        //     .then( (returned) =>{
        //         test =  returned;
        //         console.log(returned);
        //     })
        // console.log("RETURNED", test);
        // return test;
    }
}

const importModule = async(name) =>
    lazy(() =>
        import(`../modules/${name}/${name}.js`)
            .catch(() => import(`../modules/NullModule.js`))
    );

async function loadViews(name) {
    let output;
    const componentPromises = 
        [name].map(async name => {
            const Module = await importModule(name);
            return <Module key={shortid.generate()} />;
        });

    Promise.all(componentPromises).then(module => {
        output = module
        console.log("output", output);
    });
    console.log("output2", output);
    return output;
    }

    loadViews();



// async function importModule(module) {
//     // return await import(`./modules/${module}/${module}.js`)
//     //         .catch(() => 
//     //             import(`./modules/NullModule.js`)
//     //         )
//     return 
// }

