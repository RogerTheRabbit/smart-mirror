import React, {lazy, Suspense} from 'react';
import shortid from 'shortid';

export default class ModuleRenderer {
    static render(props) {
        const Module = lazy(() => {
            import(`./modules/${this.props.name}/${this.props.name}.js`)
                .catch(() => 
                    import(`./modules/NullModule.js`)
                )
        });
        return (<Suspense fallback={<div>Loading...</div>}>
            <Module {...module.properties} key={shortid.generate()}/>;
        </Suspense>);
    }
}

// async function importModule(module) {
//     // return await import(`./modules/${module}/${module}.js`)
//     //         .catch(() => 
//     //             import(`./modules/NullModule.js`)
//     //         )
//     return 
// }

