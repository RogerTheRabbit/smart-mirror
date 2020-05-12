
const config = {
    template: "BorderTemplate",
    modules: [
        {
            name: "TemplateModule",
            position: "sidebarRight",
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
        {
            name: "NewsHeadlines",
            position: "middle",
        },
        {
            name: "RandomFact",
            position: "header",
        }
    ]
};

export default config;
