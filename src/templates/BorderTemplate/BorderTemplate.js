import React, {Component, Suspense} from 'react';
import Module from '../Module.js';
import "./BorderTemplate.css";
import shortid from 'shortid';

const importModule = name =>
    lazy(() =>
        import(`../../modules/${name}/${name}.js`).catch(() => import(`../../modules/NullModule.js`))
    );

class BorderTemplate extends Module {

    state = {
        header: [],
        sidebarLeft: [],
        middle: [],
        sidebarRight: [],
        footer: [],
    }

    componentDidMount() {

        let newState = {
            header: [],
            sidebarLeft: [],
            middle: [],
            sidebarRight: [],
            footer: [],
        };

        // this.props.children.forEach(async(module) => {

            //let element = this.buildModule(module)// <ModuleRenderer {...module} key={shortid.generate()}/>
    
            
            async function loadModules() {
                console.log("this", this);
                const componentPromises = 
                    this.props.children.map(async module => {
                        const Module = await importModule(module.name);
                        let promise = <Module key={shortid.generate()} />

                        switch (module.position) {
                            case "header":
                                newState.header.push(promise);
                                break;
                            case "sidebarLeft":
                                newState.sidebarLeft.push(promise);
                                break;
                            case "middle":
                                newState.middle.push(promise);
                                break;
                            case "sidebarRight":
                                newState.sidebarRight.push(promise);
                                break;
                            case "footer":
                                newState.footer.push(promise);
                                break;
                            default:
                                newState.middle.push(promise);
                                break;
                            }

                        console.log("Built promise", promise);
                        return promise;
                    });

                Promise.all(componentPromises).then(() => {
                    setState(newState);
                });
            }

            loadModules();



        
        // });
        console.log("Setting State to:", newState);
        this.setState(newState);
    }

    render() {

        console.log("STATE:", this.state);

        return (
            <div id={"container"}>
                <div id={"header"}>
                    <Suspense fallback={<div>Loading...</div>} key={shortid.generate()}>
                        {this.state.header}
                    </Suspense>
                </div>
                <div id={"sidebarLeft"}>
                    <Suspense fallback={<div>Loading...</div>} key={shortid.generate()}>
                        {this.state.sidebarLeft}
                    </Suspense>
                </div>
                <div id={"middle"}>
                    <Suspense fallback={<div>Loading...</div>} key={shortid.generate()}>
                        {this.state.middle}
                    </Suspense>
                </div>
                <div id={"sidebarRight"}>
                    <Suspense fallback={<div>Loading...</div>} key={shortid.generate()}>
                        {this.state.sidebarRight}
                    </Suspense>
                </div>
                <div id={"footer"}>
                    <Suspense fallback={<div>Loading...</div>} key={shortid.generate()}>
                        {this.state.footer}
                    </Suspense>
                </div>
            </div>
        );
    }
}

export default BorderTemplate;
