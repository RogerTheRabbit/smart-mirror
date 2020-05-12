
const config = {
    template: {
        name: "Grid",
        properties: {
            rows: 2,
            cols: 2,
        }
    },
    modules: [
        {
            name: "TemplateModule",
            position: "header",
        },
        {
            name: "BasicTime",
            position: "sidebarLeft",
            properties: {
                showSeconds: true,
                user23hTime: true
            }
        },
        {
            name: "Time",
            position: "footer",
        },
        // {
        //     name: "NewsHeadlines",
        //     position: "sidebarRight",
        // },
        {
            name: "RandomFact",
            position: "sidebarRight",
        }
    ]
};

export default config;
